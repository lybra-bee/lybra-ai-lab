---
layout: experiment
title: "Stable Diffusion 1.5"
date: 2024-12-15
status: success
performance: "12-18 секунд"
hardware: "P102-100 10GB + Xeon E5 2650v4"
description: "Первый эксперимент по генерации изображений на P102-100"
---

# 🎨 Stable Diffusion 1.5

Первый эксперимент по генерации изображений на P102-100

## 🔍 Детали эксперимента

- **Дата проведения:** 15 декабря 2024
- **Оборудование:** P102-100 10GB + Xeon E5 2650v4
- **Софт:** AUTOMATIC1111 WebUI
- **Модель:** Stable Diffusion 1.5
- **Разрешение:** 512x512 пикселей

## ⚙️ Настройки запуска

```bash
python launch.py --precision full --no-half \
--medvram --opt-split-attention \
--disable-nan-check \
--listen --port 7860
```

**Параметры генерации:**
- Разрешение: 512x512 пикселей
- Количество шагов: 20-25
- CFG Scale: 7-9
- Сэмплер: Euler a, DPM++ 2M Karras
- Без негативных промптов

## 🖼️ Результаты генерации

### Промпт #1: Фэнтези-пейзаж
**Промпт:** "magical forest with glowing mushrooms, ancient ruins, misty atmosphere, fantasy art, detailed, epic composition, 4k"  
**Параметры:** Steps: 20, Sampler: Euler a, CFG: 7.5  
**Время генерации:** 14 секунд  
![Фэнтези-пейзаж](/assets/images/experiments/sd15-experiment/fantasy-landscape.jpg)

### Промпт #2: Киберпанк-город
**Промпт:** "cyberpunk city street at night, neon lights, rain, futuristic buildings, crowded, cinematic lighting, Blade Runner style"  
**Параметры:** Steps: 25, Sampler: DPM++ 2M Karras, CFG: 8  
**Время генерации:** 18 секунд  
![Киберпанк-город](/assets/images/experiments/sd15-experiment/cyberpunk-city.jpg)

### Промпт #3: Портрет в стиле аниме
**Промпт:** "anime girl with blue hair, school uniform, cherry blossoms in background, detailed eyes, masterpiece, best quality, anime art style"  
**Параметры:** Steps: 22, Sampler: Euler a, CFG: 7  
**Время генерации:** 12 секунд  
![Аниме портрет](/assets/images/experiments/sd15-experiment/anime-portrait.jpg)

### Промпт #4: Научная фантастика
**Промпт:** "futuristic space station interior, advanced technology, clean design, astronauts, zero gravity, sci-fi, realistic, detailed"  
**Параметры:** Steps: 25, Sampler: DPM++ 2M Karras, CFG: 8.5  
**Время генерации:** 16 секунд  
![Космическая станция](/assets/images/experiments/sd15-experiment/sci-fi-station.jpg)

### Промпт #5: Реалистичный пейзаж
**Промпт:** "mountain landscape at sunrise, photorealistic, dramatic lighting, sharp focus, professional photography, 8k"  
**Параметры:** Steps: 20, Sampler: Euler a, CFG: 7.0  
**Время генерации:** 13 секунд  
![Реалистичный пейзаж](/assets/images/experiments/sd15-experiment/mountain-landscape.jpg)

## 📊 Анализ производительности

- Среднее время генерации: 12-18 секунд  
- Использование памяти GPU: 8.2-8.8 GB из 10 GB  
- Загрузка процессора: 15-25% во время генерации  
- Температура GPU: 68-74°C под нагрузкой  
![Мониторинг системы](/assets/images/experiments/sd15-experiment/system-monitor.jpg)

## 💡 Выводы и наблюдения

### ✅ Что работает хорошо:
- P102-100 отлично справляется с Stable Diffusion 1.5
- 10GB памяти достаточно для работы с базовыми моделями
- Стабильная работа без сбоев
- Приемлемая скорость генерации

### ⚠️ Сложности и решения:
- Требуется флаг --no-half для совместимости
- --medvram обязателен для оптимизации памяти
- Долгая инициализация (2-3 минуты)
- Ограниченная поддержка некоторых оптимизаций
