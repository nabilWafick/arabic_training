# ArabicMaster Pro - Backend Setup & Access Guide

## Database Setup

### PostgreSQL Container
The project uses Docker Compose to run PostgreSQL locally.

```bash
# Start database (from docker/ directory)
cd docker && docker-compose up -d postgres

# Database credentials
Host: localhost
Port: 5432
Database: arabicmaster
Username: arabicmaster
Password: arabicmaster_secret
```

### Prisma Schema
The database schema is defined in `prisma/schema.prisma` and includes:
- **Users** - User accounts with roles (ADMIN, USER)
- **Sessions** - NextAuth session storage
- **Progress** - User learning progress per lesson
- **UserAchievements** - Earned badges and achievements
- **UserStats** - XP, level, streaks per user

### Initialize Database

```bash
# 1. Generate Prisma client
pnpm prisma generate

# 2. Create tables from schema (one-time setup)
pnpm prisma db:push

# 3. Seed with test data
pnpm prisma db:seed

# 4. View database with Prisma Studio (optional)
pnpm prisma studio
```

### Test Credentials (After Seeding)
```
Admin Account:
  Email: admin@arabicmaster.com
  Password: Admin123!

Test User Account:
  Email: fatima.zahra@email.com
  Password: Test123!

Additional test users available (see prisma/seed.ts)
```

---

## Backend API

### Running the Dev Server
```bash
pnpm dev
# Server runs on http://localhost:3000
```

### Authentication API
- **POST /api/auth/register** - Register new user (email/password)
- **POST /api/auth/[...nextauth]** - NextAuth login/logout/session management
- **GET /api/auth/session** - Get current user session

### Admin API (Protected - Admin Role Required)
*To be implemented:*
- **GET /api/admin/users** - List all users (paginated)
- **GET /api/admin/analytics** - Platform analytics/stats
- **GET /api/admin/activity** - Recent user activity
- **POST /api/admin/users/:id/role** - Change user role
- **DELETE /api/admin/users/:id** - Delete user

### Learning API
- **GET /api/progress/:userId** - Get user's learning progress
- **POST /api/progress/lesson** - Mark lesson as complete
- **GET /api/ai/generate** - AI exercise generation
- **POST /api/ai/verify** - AI answer verification

### Database Access
```bash
# Prisma Studio (GUI to database)
pnpm prisma studio
# Opens at http://localhost:5555

# Direct PostgreSQL access
psql postgresql://arabicmaster:arabicmaster_secret@localhost:5432/arabicmaster

# Docker container access
docker exec -it arabicmaster_db psql -U arabicmaster -d arabicmaster
```

---

## Security Configuration

### Password Hashing
✅ **Argon2id** is implemented for password hashing
```typescript
// Configuration in app/api/auth/register/route.ts
import * as argon2 from "argon2";

const hashedPassword = await argon2.hash(password, {
  type: argon2.argon2id,
  memoryCost: 65536,      // 64 MB
  timeCost: 3,            // 3 iterations
  parallelism: 4,         // 4 threads
});
```

**Security Parameters:**
- **Algorithm**: Argon2id (resistant to both GPU and side-channel attacks)
- **Memory Cost**: 65536 KiB (64 MB) - strong brute-force resistance
- **Time Cost**: 3 iterations - balances security and performance
- **Parallelism**: 4 threads - allows multi-threaded hashing

### Environment Variables
```env
# .env.local
DATABASE_URL="postgresql://arabicmaster:arabicmaster_secret@localhost:5432/arabicmaster?schema=public"
NEXTAUTH_SECRET="your-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"

# AI Provider
MISTRAL_API_KEY="your-mistral-key"

# OAuth (optional)
GOOGLE_CLIENT_ID="..."
GOOGLE_CLIENT_SECRET="..."
GITHUB_CLIENT_ID="..."
GITHUB_CLIENT_SECRET="..."
```

---

## Admin Dashboard Access

### Prerequisites
1. Database seeded with test data
2. Logged in as admin user (`admin@arabicmaster.com`)
3. User has ADMIN role in database

### Admin Routes
- **Dashboard**: `/admin` - View platform analytics and user management
- **Protected**: Admin-only access enforced via middleware

### Admin Features (To Implement)
- [ ] User management (list, ban, promote to admin)
- [ ] Analytics dashboard (total users, active users, lessons completed, XP awarded)
- [ ] Content management (add/edit/delete curriculum)
- [ ] Achievement management (create/modify achievements)
- [ ] Activity monitoring (user activity feed, engagement metrics)

---

## Adminer (Database GUI)

Optional database management tool running on Docker.

```bash
# Access at http://localhost:8080
# Select "PostgreSQL"
# Server: postgres
# Username: arabicmaster
# Password: arabicmaster_secret
# Database: arabicmaster
```

---

## Development Workflow

### 1. Start Environment
```bash
cd docker && docker-compose up -d postgres
cd .. && pnpm dev
```

### 2. Seed Test Data (First Time Only)
```bash
pnpm db:seed
```

### 3. Login with Test Account
- Go to http://localhost:3000/login
- Email: `admin@arabicmaster.com` or `fatima.zahra@email.com`
- Password: See test credentials above

### 4. View Database Changes
```bash
pnpm prisma studio
# Opens interactive database viewer at http://localhost:5555
```

---

## Troubleshooting

### "Can't reach database server"
```bash
# Ensure container is running
docker ps | grep arabicmaster_db

# If not running:
cd docker && docker-compose up -d postgres

# Check logs:
docker logs arabicmaster_db
```

### "Permission denied" or "role doesn't exist"
```bash
# Recreate database from scratch
cd docker && docker-compose down -v && docker-compose up -d postgres
sleep 10
pnpm db:seed
```

### "Table doesn't exist"
```bash
# Push Prisma schema to database
pnpm prisma db:push

# Then seed:
pnpm prisma db:seed
```

---

## API Documentation

### POST /api/auth/register
Register a new user with email and password.

**Request:**
```json
{
  "email": "user@example.com",
  "password": "SecurePass123!",
  "name": "User Name"
}
```

**Response:**
```json
{
  "id": "user-id",
  "email": "user@example.com",
  "name": "User Name",
  "role": "USER"
}
```

### GET /api/progress/:userId
Get user's learning progress across all phases.

**Response:**
```json
{
  "totalLessonsCompleted": 15,
  "totalXP": 1250,
  "currentLevel": 3,
  "phases": [
    {
      "phaseId": 1,
      "lessonsCompleted": 5,
      "lessonsTotal": 30,
      "percentComplete": 16.7
    }
  ]
}
```

---

## Next Steps

1. ✅ Database configured and seeded
2. ✅ Argon2 password hashing implemented
3. ✅ NextAuth.js authentication
4. ❌ Admin API endpoints (to implement)
5. ❌ Admin dashboard backend integration (to implement)
6. ❌ User management endpoints (to implement)

---

## Questions?

See the main README.md for project overview and architecture details.
