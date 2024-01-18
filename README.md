# Прогрессивное веб-приложени – Кошелёк

![app icon](/docs/images/app-icon.png)

## Цель

Создать аналог приложения Apple Wallet с расширенным функционалом в форме прогрессивного веб-приложения (PWA).

## Стек

TypeScript, Next js, MongoDB

## Общая структура интерфейса

```txt
Список категорий
├── Категория
│   ├── Карточка
│   └── Карточка
├── Категория
│   └── Карточка
└── Категория
    └── Карточка
```

## Планируемые возможности

- [ ] Импорт карточек из формата .pkpass и ассоциация с типом файла
- [ ] Полноценная работа в режиме оффлайн
- [ ] Конструктор карточек
- [ ] Редактор карточек
- [ ] Картинки и иконки для карточек
- [ ] 5 типов карточек: Стандартная, Карточка магазина, Купон, Билет на мероприятие, Посадочный талон
- [ ] Уведолмения по геолокации
- [ ] Импорт и экспорт карточек при помощи файлов
- [ ] Возможность поделится карточкой через системное меню в виде картинки или файла
- [ ] Запуск привязанного к карточке приложения
- [ ] Парсинг карточек выдачи заказов из Озона, Яндекса и прочих
- [ ] Список покупок с интеграцией в Home Assitant

## Схема данных

База данных - MongoDB  
Коллекции: `cards`, `categories`

### cards

`cards` - хранит все карточки

```json
{
    "id": 1,
    "category_id": 1,
    "category_name": "Магазины",
    "name": "Карта лояльности",
    "short_name": "Карта лояльности",
    "background_color": "#ef121e",
    "label_color": "#ffa2a2",
    "text_color": "#ffffff",
    "images": {
        "icon": "/url/image.png",
        "logo": "/url/image.png",
        "strip": "/url/image.png"
    },
    "front_fields": [
    {
        "key" : "card_number",
        "label" : "НОМЕР КАРТЫ",
        "value" : "0000000000000"
    }
    ],
    "barcode" : {
        "text_label" : "0000000000000",
        "value" : "0000000000000",
        "format" : "PKBarcodeFormatCode128",
        "value_encoding" : "iso-8859-1"
    },
    "app_launch_urls" : [
        "apple": "itms://itunes.apple.com/us/app/apple-store/id0",
    ],
    "back_fields" : [
        {
            "key" : "welcome",
            "label" : "Карта постоянного покупателя",
            "value" : "Это ваша электронная карта лояльности"
        },
    ],
    "last_updated": ""
}
```

### categories

`categories` - хранит список категорий для группировки на главной странице

```json
{
    "id": 1,
    "name": "Магазины",
    "image": "/url/image.png",
    "background_color": "#ef121e",
    "text_color": "#ffffff",
}
```
