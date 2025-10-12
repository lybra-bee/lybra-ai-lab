---
layout: home
title: "Lybra AI Lab"
description: "Лаборатория экспериментов с нейросетями"
---

<div class="cards-grid">
{% for experiment in site.experiments limit:3 %}
<div class="card">
    <h3>{{ experiment.title }}</h3>
    <p><strong>📅 Дата:</strong> {{ experiment.date | date: "%d.%m.%Y" }}</p>
    <p><strong>🎯 Статус:</strong> {{ experiment.status }}</p>
    <p><strong>⚡ Производительность:</strong> {{ experiment.performance }}</p>
    <p>{{ experiment.description }}</p>
    <a href="{{ '/experiments/' | relative_url }}" class="btn btn-primary">Смотреть эксперименты</a>
 }}" class="text-accent hover:underline">Подробнее →</a>
</div>
{% endfor %}
</div>

## 🛠️ [Конфигурация оборудования](/hardware.html)

## 🔗 [Основной сайт Lybra Bee](https://lybra-bee.github.io/)

<section id="about" style="margin-top: 4rem;">
    <h2>🧪 О лаборатории</h2>
    <div class="card">
        <p>Lybra AI Lab - это персональная лаборатория для экспериментов с нейросетевыми моделями. Все эксперименты проводятся на собственном серверном оборудовании с вычислительной картой P102-100.</p>
        <p>Основные направления исследований: генерация изображений, языковые модели, оптимизация производительности на нестандартном железе.</p>
    </div>
</section>
