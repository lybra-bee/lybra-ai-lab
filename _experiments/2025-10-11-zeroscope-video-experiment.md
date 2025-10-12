---
layout: experiment
title: "Генерация видео на P102-100"
date: 2025-10-12
status: in-progress
performance: "≈12 секунд на кадр 512x512, ≈15 секунд финальное видео"
hardware: "NVIDIA P102-100 10GB + Xeon E5 2650v4"
description: "Эксперимент по генерации видео со смыслом, 512x512, кадр за кадром, объединение в финальный клип"
---

# 🎬 Генерация видео на P102-100

В этом эксперименте мы создаём видео длиной около 10 секунд, с разрешением 512x512, со смыслом, показывая возможности видеогенерации.

## 🔧 Установка окружения

```bash
# Обновление системы
sudo apt update && sudo apt upgrade -y

# Установка Python 3.10 и pip
sudo apt install python3.10 python3.10-venv python3.10-dev -y

# Создание виртуального окружения
python3.10 -m venv ~/video-gen/venv310
source ~/video-gen/venv310/bin/activate

# Установка необходимых библиотек
pip install torch torchvision --index-url https://download.pytorch.org/whl/cu116
pip install diffusers transformers accelerate imageio tqdm
pip install ffmpeg-python
```

> 💡 Для работы с CUDA 12.4 и P102-100 использовалась библиотека PyTorch с поддержкой GPU.

---

## 🛠️ Подготовка модели

Используем **Stable Diffusion v1.5**. Для экономии памяти и стабильной генерации видео кадр за кадром:

```python
import torch
from diffusers import StableDiffusionPipeline, DPMSolverMultistepScheduler

# Инициализация модели
pipe = StableDiffusionPipeline.from_pretrained(
    "runwayml/stable-diffusion-v1-5",
    torch_dtype=torch.float16
)

# Подключаем GPU
pipe.to("cuda")

# Используем DPM-Solver для ускорения
pipe.scheduler = DPMSolverMultistepScheduler.from_config(pipe.scheduler.config)
```

---

## 🎨 Генерация видео кадр за кадром

Чтобы обойти ограничение GPU по памяти, генерируем **по одному кадру**, затем собираем их в видео:

```python
#!/usr/bin/env python3
import os
import torch
from diffusers import StableDiffusionPipeline, DPMSolverMultistepScheduler
from tqdm import tqdm
import imageio

# === Настройки ===
output_dir = "output_frames"
os.makedirs(output_dir, exist_ok=True)

prompt = "a futuristic city at sunset, flying cars, cinematic lighting, ultra realistic, masterpiece, 4k"
num_frames = 120  # ≈ 10 секунд при 12 fps
width, height = 512, 512

# === Инициализация модели ===
pipe = StableDiffusionPipeline.from_pretrained(
    "runwayml/stable-diffusion-v1-5",
    torch_dtype=torch.float16
).to("cuda")

pipe.scheduler = DPMSolverMultistepScheduler.from_config(pipe.scheduler.config)

# === Генерация кадров ===
for i in tqdm(range(num_frames), desc="Generating frames"):
    seed = 42 + i
    generator = torch.Generator("cuda").manual_seed(seed)
    image = pipe(prompt, width=width, height=height, num_inference_steps=25, generator=generator).images[0]
    # Сохраняем кадр
    image_path = os.path.join(output_dir, "frame_" + str(i).zfill(4) + ".png")
    image.save(image_path)

# === Сборка видео ===
# Конкатенация вместо f-string, чтобы Markdown не обрывал блок
ffmpeg_cmd = "ffmpeg -y -framerate 12 -i " + output_dir + "/frame_%04d.png -c:v libx264 -pix_fmt yuv420p video.mp4"
os.system(ffmpeg_cmd)

# ✅ Сообщение о завершении
done_msg = "\u2705 Видео сохранено как video.mp4"
print(done_msg)
```

---

## 📊 Производительность

- Время генерации одного кадра 512x512: **≈12 секунд**  
- Память GPU: 9–9.5 GB занято из 10 GB  
- Загрузка GPU: 95–100% при генерации кадра
- Температура GPU колеблется от 60 до 69 градусов
- Видеоряд: 12 fps, около 10 секунд

---

## 🖼️ Результаты

Сначала сделал 5 кадров, для эксперимента:

<video width="256" height="256" controls>
  <source src="{{ '/assets/videos/video1.mp4' | relative_url }}" type="video/mp4">
  Ваш браузер не поддерживает воспроизведение видео.
</video>

Затем 250 кадров и собрал в одно видео:

<video width="256" height="256" controls>
  <source src="{{ '/assets/videos/video2.mp4' | relative_url }}" type="video/mp4">
  Ваш браузер не поддерживает воспроизведение видео.
</video>


---

## 💡 Выводы

- P102-100 справляется с генерацией видео на 512x512 пикселей, если работать **кадр за кадром**.  
- Обход ограничений памяти GPU позволяет избежать ошибок `CUDA out of memory`.  
- Генерация видео со смыслом и высокой детализацией не получилась, получился набор отдельных кадров.  
- Было мало времени на эксперимент, может и получилось бы сгенерировать ролик со смыслом.
- обязательно продолжу свои изыскания, в следующие выходные попробую Stable Video Diffusion. 

---

## 🔧 Рекомендации

1. Использовать генерацию **по кадру** для больших разрешений или длинного видео.  
2. Для ускорения можно уменьшить количество шагов (`num_inference_steps`) или использовать меньший CFG Scale.  
3. Мониторить GPU через `nvidia-smi` для контроля загрузки.  
4. Для финальной публикации видео лучше использовать 12 fps для плавности.  

---

**Следующий шаг:** попытка генерации видео через Stable Video Diffusion.
