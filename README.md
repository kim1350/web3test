# Web3Test

Мобильное приложение на **Expo + React Native**, написанное на **TypeScript**. Проект использует современный стек библиотек и построен на архитектуре **FSD (Feature-Sliced Design)**.

---

## Стек технологий

- **Expo** `~54`
- **React** `19`
- **React Native** `0.81`
- **TypeScript** `~5.9`
- **React Navigation** (Native Stack)
- **React Hook Form**
- **Reanimated v4**
- **Gesture Handler**
- **Bottom Sheet (@gorhom)**
- **SVG, Blur, Image (Expo)**

---

## Установка и запуск

### 1. Установка зависимостей

```bash
npm install
# или
yarn install
```

### 2. Запуск проекта

```bash
npm start        # запуск Expo
npm run android  # Android
npm run ios      # iOS
npm run web      # Web
```

---

## Архитектура проекта

Проект построен по архитектуре **FSD (Feature-Sliced Design)** — модульный и масштабируемый подход к организации фронтенд-приложений.

### Основные слои FSD

```text
src/
├── app/            # Инициализация приложения, провайдеры, навигация
├── processes/      # Долгоживущие бизнес-процессы (опционально)
├── pages/          # Экраны приложения
├── widgets/        # Крупные UI-блоки, собирающие фичи
├── features/       # Пользовательские действия и бизнес-логика
├── entities/       # Бизнес-сущности (user, wallet, profile и т.д.)
├── shared/         # Переиспользуемые модули
└── index.ts        # Точка входа
```

---

## Навигация

Навигация реализована с помощью **@react-navigation/native** и **native-stack** и инициализируется на уровне `app`.

---

## Скрипты

```json
"scripts": {
  "start": "expo start",
  "android": "expo start --android",
  "ios": "expo start --ios",
  "web": "expo start --web"
}
```

---

## Требования

- Node.js `>=18`
- npm / yarn
- Expo CLI
