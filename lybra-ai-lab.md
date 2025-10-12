---
layout: default
title: "Lybra AI Lab — Эксперименты"
description: "Полный список экспериментов лаборатории Lybra AI"
permalink: /lybra-ai-lab/
---

<h1>🧪 Lybra AI Lab — Эксперименты</h1>
<p>Исследуем границы возможностей нейросетей — от генерации изображений и видео до синтеза речи и автоматизации творческих процессов.</p>

<section class="experiments-list">
  <h2>📘 Все эксперименты</h2>
  <div class="cards-grid">
  {% for experiment in site.experiments reversed %}
  <div class="card">
      <h3>{{ experiment.title }}</h3>
      <p><strong>📅 Дата:</strong> {{ experiment.date | date: "%d.%m.%Y" }}</p>
      {% if experiment.status %}
      <p><strong>🎯 Статус:</strong> {{ experiment.status }}</p>
      {% endif %}
      {% if experiment.performance %}
      <p><strong>⚡ Производительность:</strong> {{ experiment.performance }}</p>
      {% endif %}
      {% if experiment.description %}
      <p>{{ experiment.description }}</p>
      {% endif %}
      <a href="{{ experiment.url | relative_url }}" class="btn btn-secondary" style="margin-top:0.5rem;">Подробнее</a>
  </div>
  {% endfor %}
  </div>
</section>

<section class="lab-info" style="margin-top: 4rem;">
  <h2>🧰 Оборудование лаборатории</h2>
  <ul>
    <li>GPU: Inno3D P102-100 (10GB VRAM)</li>
    <li>CPU: Intel Xeon E5</li>
    <li>RAM: 32 GB DDR4</li>
    <li>OS: Linux Mint 24.02</li>
  </ul>
  <p><a href="/hardware.html" class="btn btn-outline">Подробнее об оборудовании</a></p>
</section>

<section class="lab-about" style="margin-top: 3rem;">
  <h2>💡 О лаборатории</h2>
  <div class="card">
      <p>Lybra AI Lab — персональная исследовательская лаборатория, посвящённая экспериментам с искусственным интеллектом. Здесь тестируются модели, которые превращают текст в видео, генерируют речь и создают музыку.</p>
      <p>Результаты публикуются в открытом доступе и применяются для обучения и автоматизации проектов.</p>
  </div>
</section>
