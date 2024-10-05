# Expenser
## Приложение для отслеживания финансов

1. Для чего это приложение?
2. Что оно может?
3. Устройство фронта
4. Устройства бэка

### Для чего это приложение?
Приложение предназначено для упрощения управления личными финансами и отслеживания поставленных целей по бюджету.

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

#### Интерфейс
Прототип интерфейса: [Figma](https://www.figma.com/design/0iHrudt4QSXkECkaV1beqm/Expenser-app-UI-prototype?node-id=0-1&t=cCBwR0gKUSksB9BD-1)

##### Вход и регистрация
![image](https://github.com/user-attachments/assets/567a64b9-2dcf-4cef-985d-1df745b722a8)
![image](https://github.com/user-attachments/assets/a0b22e5b-f2c6-42c2-984a-bbc710ac370d)

##### Главная страница и добавление транзакции
![image](https://github.com/user-attachments/assets/a80c1b9c-0aa9-41df-ac0d-a4213633b70f)
![image](https://github.com/user-attachments/assets/c6222205-4fbe-4d02-a9d7-59a1b7a4d742)
![image](https://github.com/user-attachments/assets/0065ba95-6912-4026-bad2-ef5380420acf)

##### Бюджет и цели
![image](https://github.com/user-attachments/assets/da3ec2ca-3a85-48bf-a4f5-5dd656705492)
![image](https://github.com/user-attachments/assets/d580bf86-9450-4693-bb81-c5a85d17099f)

##### Профиль и настройки
![image](https://github.com/user-attachments/assets/8fca19ee-fa18-4700-9b7a-86df201340a0)
![image](https://github.com/user-attachments/assets/cb569bf3-ec5a-4a8f-958f-e27a80c922ed)


### Устройства бэка
Бэк написан на C# ASP.NET Core. Для БД выбран PostgreSQL.
