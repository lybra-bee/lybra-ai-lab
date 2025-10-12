---
layout: home
title: "Lybra AI Lab"
description: "Лаборатория экспериментов с нейросетями"
---

<div class="hero">
  <div class="hero-content container">
    <h1 class="hero-title">🧪 Lybra AI Lab</h1>
    <p class="hero-description">Персональная лаборатория экспериментов с нейросетями. Генерация изображений, видео, озвучка и тестирование ИИ на нестандартном оборудовании.</p>
    <div class="hero-actions">
      <a href="{{ '/experiments/' | relative_url }}" class="btn btn-primary">Смотреть эксперименты</a>
      <a href="/hardware.html" class="btn btn-secondary">Конфигурация оборудования</a>
    </div>
  </div>
</div>

<div class="cards-grid" style="margin-top:2rem;">
{% for experiment in site.experiments limit:3 %}
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
    <a href="{{ '/experiments/' | relative_url }}" class="btn btn-secondary">Смотреть все эксперименты →</a>
</div>
{% endfor %}
</div>

<section id="about" style="margin-top: 4rem;">
    <h2>🧪 О лаборатории</h2>
    <div class="card">
        <p>Lybra AI Lab — персональная лаборатория для экспериментов с нейросетевыми моделями. Все эксперименты проводятся на собственном серверном оборудовании с видеокартой P102-100.</p>
        <p>Основные направления исследований: генерация изображений, видео, озвучка и оптимизация производительности на нестандартном железе.</p>
    </div>
</section>

## 🔗 [Основной сайт Lybra Bee](https://lybra-bee.github.io/)
