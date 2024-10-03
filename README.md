# Expenser
## Приложение для отслеживания финансов

1. Для чего это приложение?
2. Что оно может?
3. Устройство фронта
4. Устройства бэка

### Для чего это приложение?
Expenser - простое и удобное решение для управления финансами. Отслеживайте расходы и доходы, планируйте бюджет и анализируйте финансовые привычки.

### Что оно может?
- Учет доходов и расходов:
   * Ввод и классификация всех финансовых операций.
   * Поддержка многовалютных операций.
   * Добавление тегов

- Бюджетирование:
   * Визуализация изменения баланса
   * Возможность просмотра транзакий по критериям

- Цели и сбережения:
   * Установка финансовых целей по доходам и расходам.
   * Отслеживание прогресса к целям.

- Интуитивно понятный интерфейс:
   * Удобная навигация и ясная структура приложения.
   * Поддержка темной и светлой тем для комфорта пользователей.

- Кроссплатформенность:
   * Доступ на мобильных устройствах и через веб-интерфейс.
   * Синхронизация данных между всеми устройствами.

### Устройство фронта
Для приложения была выбрана платформа [Ionic Capacitor](https://capacitorjs.com/). Благодаря ней можно создавать PWA и нативные мобильные приложения под IOS|Android с использованием HTML, CSS и JS.
В качестве фронтенд-фреймворка выбран Vue вместе с библиотекой компонентов PrimeVue.
Прототип интерфейса: [Figma](https://www.figma.com/design/0iHrudt4QSXkECkaV1beqm/Expenser-app-UI-prototype?node-id=0-1&t=cCBwR0gKUSksB9BD-1)

### Устройства бэка
Бэк написан на C# ASP.NET Core. Для БД выбран PostgreSQL.
