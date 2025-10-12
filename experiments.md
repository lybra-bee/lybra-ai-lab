---
layout: default
title: "Все эксперименты"
permalink: /experiments/
---

<h1>🧪 Все эксперименты Lybra AI Lab</h1>
<p>Здесь собраны все эксперименты лаборатории. Каждый эксперимент — это шаг в исследовании нейросетевых моделей.</p>

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
    <a href="{{ experiment.url | relative_url }}" class="btn btn-secondary">Подробнее →</a>
</div>
{% endfor %}
</div>

<a href="{{ '/' | relative_url }}" class="btn btn-primary" style="margin-top:1.5rem;">← На главную</a>
