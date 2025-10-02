---
layout: experiment
title: "Stable Diffusion 1.5 - Первый запуск"
date: 2025-09-15
status: success
status_text: "Завершен"
performance: "12-18 сек/изображение"
description: "Тестирование генерации изображений на P102-100 с разными промптами"
prompts:
  - title: "Фэнтези-пейзаж"
    prompt: "magical forest with glowing mushrooms, ancient ruins, misty atmosphere, fantasy art, detailed, epic composition, 4k"
    params: "Steps: 20, Sampler: Euler a, CFG: 7.5"
    time: "14 секунд"
    image: "prompt1-result.jpg"

  - title: "Киберпанк-город"
    prompt: "cyberpunk city street at night, neon lights, rain, futuristic buildings, crowded, cinematic lighting, Blade Runner style"
    params: "Steps: 25, Sampler: DPM++ 2M Karras, CFG: 8"
    time: "18 секунд"
    image: "prompt2-result.jpg"
---

## 🔍 Детали эксперимента

**Оборудование:** P102-100 10GB + Xeon E5 2650v4  
**Софт:** AUTOMATIC1111 WebUI  
**Модель:** Stable Diffusion 1.5

## ⚙️ Настройки запуска

```bash
python launch.py --precision full --no-half \
--medvram --opt-split-attention \
--disable-nan-check \
--listen --port 7860
