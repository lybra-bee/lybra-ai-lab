---
layout: default
title: "Конфигурация системы"
---

# 🖥️ Конфигурация системы

## 🔌 Оборудование

<div class="cards-grid">
{% for item in site.data.hardware %}
<div class="card">
    <div class="hardware-item">
        <div class="hardware-icon">{{ item.icon }}</div>
        <h3>{{ item.name }}</h3>
        <p class="hardware-description">{{ item.description }}</p>
        <p class="hardware-details">{{ item.details }}</p>
    </div>
</div>
{% endfor %}
</div>

## 💡 Особенности конфигурации

<div class="card success">
    <h3>⚡ Специфические особенности</h3>
    <ul>
        <li><strong>P102-100</strong> используется исключительно для вычислений в нейросетях</li>
        <li><strong>Radeon 560</strong> отвечает только за вывод изображения на монитор</li>
        <li><strong>Серверная платформа X99</strong> обеспечивает стабильность 24/7</li>
        <li>Разделение вычислительной и выводящей карт для оптимальной производительности</li>
    </ul>
</div>

<div class="card">
    <h3>🎯 Преимущества конфигурации</h3>
    <ul>
        <li>Высокая энергоэффективность при значительной вычислительной мощности</li>
        <li>Поддержка ECC памяти для стабильной работы</li>
        <li>Оптимальное охлаждение даже под продолжительной нагрузкой</li>
        <li>Гибкость в настройке и модернизации</li>
    </ul>
</div>

<div class="text-center" style="margin-top: 3rem;">
    <a href="{{ '/' | relative_url }}" class="btn btn-primary">← Назад в лабораторию</a>
</div>
