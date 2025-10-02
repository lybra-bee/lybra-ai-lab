---
layout: experiment
title: "Stable Diffusion 1.5 - Первый запуск"
date: 2025-09-15
status: success
status_text: "Завершен"
performance: "12-18 сек/изображение"
description: "Тестирование генерации изображений на P102-100 с разными промптами"
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
