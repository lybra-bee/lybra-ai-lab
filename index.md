---
layout: home
title: "Lybra AI Lab"
description: "Лаборатория экспериментов с нейросетями"
---

<!-- Убираем лишний блок hero -->
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
    <!-- ИСПРАВЛЕННАЯ ССЫЛКА: ведет на сам эксперимент -->
    <a href="{{ experiment.url | relative_url }}" class="btn btn-secondary">Подробнее об эксперименте →</a>
</div>
{% endfor %}
</div>

<!-- Добавляем кнопку для просмотра всех экспериментов -->
<div style="text-align: center; margin-top: 2rem;">
    <a href="{{ '/experiments/'
