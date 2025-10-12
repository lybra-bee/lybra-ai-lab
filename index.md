---
layout: home
title: "Lybra AI Lab"
description: "Лаборатория экспериментов с нейросетями"
---

{% include hero-block.html %}

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

## 🔗 [Основной сайт Lybra Bee](https://lybra-bee.github.io/)
