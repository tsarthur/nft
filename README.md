# Backend приложение на NestJS для работы с NFT

## Описание проекта

Это backend-приложение на NestJS с использованием TypeScript для работы с NFT. Приложение периодически опрашивает API TONAPI, обновляя данные о NFT в базе данных PostgreSQL.

## Требования

### Стек технологий

- Node.js
- NestJS
- TypeScript
- PostgreSQL
- Prisma
- CRON для периодических задач

### Функциональные требования

- Разработка API на NestJS с использованием TypeScript.
- Взаимодействие с PostgreSQL для хранения данных.
- Периодическое выполнение задач (CRON) для обновления данных о NFT с использованием TONAPI.

### База данных

- PostgreSQL с таблицей для хранения данных о NFT:
  - id (primary key)
  - address (уникальный)
  - name
  - description
  - image
  - owner
  - updated_at (дата и время последнего обновления)

### TONAPI

- Используется для получения информации о NFT с адреса коллекции:
  - EQAv34EhRpc6hSzYpysGYVWbnmKhOtl3C8m2aeXsO-wiXhD3

## Инструкции по установке и запуску

1. Установите зависимости:
    ```bash
    yarn install
    # Необходимо настроить файл .env в корне проекта с необходимыми переменными окружения из .env.sample
    yarn migrate:push
    yarn seed:up
    yarn start:dev 
    # Требуется подождать 200 секунд, пока CRON заработает

2. Дополнитель возможности:
- localhost:3000/swagger
