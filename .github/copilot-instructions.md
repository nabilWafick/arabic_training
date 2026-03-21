# Mac Eats - Copilot Project Instructions

## Project Overview
- **App**: Mac Eats — Food delivery mobile app for Benin (French language UI)
- **Framework**: Flutter (Dart)
- **State Management**: GetX (controllers, reactive state, dependency injection)
- **Persistence**: GetStorage (local key-value storage for cart, preferences)
- **Architecture**: v2 redesign in `lib/v2/` — clean separation of concerns

## Project Structure
```
lib/v2/
├── controllers/     # GetX controllers (business logic, state)
├── models/          # Data models (cart items, meals, restaurants)
├── pages/           # UI screens organized by feature
├── services/        # API services, mock services
├── utils/           # Theme, constants, helpers
└── widgets/         # Reusable components
```

## Code Standards

### Dart/Flutter
- Use `GetxController` for all state management
- Use `.obs` for reactive variables, `Obx(() =>)` for reactive UI
- Use `Get.find<T>()` for dependency injection
- Use GetStorage for local persistence (cart data, preferences)
- Use `CachedNetworkImage` for all network images with placeholders
- French language for all user-facing text

### Architecture
- Controllers handle business logic — never put logic in widgets
- Services handle API calls — controllers call services
- Models include `toJson()`/`fromJson()` for serialization
- Cart items are self-contained (meal + supplements + drinks in one model)

### API
- Base URL staging: `https://mac-api.206.189.2.227.sslip.io`
- Auth: Bearer token via `GetStorage`
- Payment methods: `cash`, `mobile_money`, `wallet` (API values)
- Supplement quantity = per-meal (not scaled by meal qty)

### UI/UX
- Follow Figma designs pixel-perfect (see `v2_interfaces/`)
- Responsive layouts for phones and tablets
- Consistent theme via `V2Theme` class
- Use `V2Images` for static asset management

## Key Business Rules
- User can only have meals from ONE restaurant in cart at a time
- Supplement qty is per-meal: total = supPrice × mealQty
- Phone numbers: stored with country code prefix (229)
- Cart persists via GetStorage across app sessions

## Git
- Branch: `nabilWafick`
- Remote: GitLab (`gitlab.nautilus-technology.net/mac/mac-mobile-app`)
- Commit messages: conventional commits (feat:, fix:, refactor:)
