---
layout: default
title: "Lybra AI Lab — Эксперименты"
description: "Все эксперименты лаборатории Lybra AI: генерация видео, изображений, озвучка и исследования ИИ"
permalink: /lybra-ai-lab/
---

<h1>🧪 Lybra AI Lab — Эксперименты</h1>
<p>Добро пожаловать в раздел лаборатории. Здесь собраны все эксперименты, проводимые с моделями искусственного интеллекта — от генерации видео и звука до оптимизации вычислений на нестандартном оборудовании.</p>

<hr>

<section id="experiments">
  <h2>📘 Все эксперименты</h2>
  <div class="cards-grid">
  {% for experiment in site.experiments %}
  <div class="card">
      <h3>{{ experiment.title }}</h3>
      <p><strong>📅 Дата:</strong> {{ experiment.date | date: "%d.%m.%Y" }}</p>
      {% if experiment.status %}
      <p><strong>🎯 Статус:</strong> {{ experiment.status }}</p>
      {% endif %}
      {% if experiment.performance %}
      <p><strong>⚡ Производительность:</strong> {{ experiment.performance }}</p>
      {% endif %}
      <p>{{ experiment.description }}</p>
      <a href="{{ experiment.url | relative_url }}" class="text-accent hover:underline">Подробнее →</a>
  </div>
  {% endfor %}
  </div>
</section>

<hr>

<section id="projects" style="margin-top: 3rem;">
  <h2>🚀 Текущие проекты</h2>
  <ul>
    <li>Генерация видео + озвучка + музыка (Zeroscope + TTS + MusicGen)</li>
    <li>Telegram-бот PromptToVideo — генерация видео по тексту</li>
    <li>Локальная генерация на Android (Termux, CPU-only)</li>
  </ul>
</section>

<hr>

<section id="hardware" style="margin-top: 3rem;">
  <h2>🛠️ Конфигурация оборудования</h2>
  <p>Текущая конфигурация лаборатории:</p>
  <ul>
    <li>GPU: Inno3D P102-100 (10GB VRAM)</li>
    <li>CPU: Intel Xeon E5</li>
    <li>RAM: 32 GB DDR4</li>
    <li>OS: Linux Mint 24.02</li>
  </ul>
  <p><a href="/hardware.html">Подробнее об оборудовании →</a></p>
</section>

<hr>

<section id="about" style="margin-top: 3rem;">
  <h2>💡 О лаборатории</h2>
  <div class="card">
      <p>Lybra AI Lab — персональная исследовательская лаборатория, посвящённая изучению и применению нейросетевых моделей. Основное направление работы — генерация контента (видео, изображений, звука и текста) и автоматизация творческих процессов.</p>
      <p>Проекты публикуются в открытом доступе, а результаты экспериментов можно использовать для обучения, тестирования и вдохновения.</p>
  </div>
</section>

---

<p style="text-align:center; margin-top: 2rem;">Lybra AI Lab © 2025 | Исследования ИИ и генерация мультимедиа</p>
