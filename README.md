# 🛒 TechStore Fullstack

TechStore es una aplicación e-commerce fullstack desarrollada con una arquitectura moderna basada en React, TypeScript, Express, Prisma y PostgreSQL.

El objetivo del proyecto es simular una tienda online real implementando autenticación JWT, gestión de productos, carrito de compra y panel de administración siguiendo buenas prácticas de desarrollo profesional.

---

## 🚀 Tecnologías

### Frontend

- React
- TypeScript
- Vite
- React Router
- React Query (TanStack Query)
- Zustand
- Axios
- React Hook Form
- Zod
- Tailwind CSS

### Backend

- Node.js
- Express
- TypeScript
- Prisma ORM
- PostgreSQL
- JWT
- bcrypt
- dotenv

---

## 📁 Arquitectura

```txt
TechStore
│
├── techstore-client
│
│   ├── src
│   │
│   ├── app
│   │   ├── providers
│   │   └── router
│   │
│   ├── features
│   │   ├── auth
│   │   └── products
│   │
│   ├── lib
│   ├── shared
│   └── assets
│
└── techstore-server
    │
    ├── prisma
    │
    └── src
        │
        ├── config
        ├── middleware
        ├── modules
        │   ├── auth
        │   └── products
        │
        ├── utils
        └── types
```

---

## ✅ Funcionalidades implementadas

### 🔐 Autenticación

- Registro de usuarios
- Login con JWT
- Middleware de autenticación
- Endpoint `/me`
- Persistencia de sesión
- Logout
- Rutas protegidas
- Perfil de usuario
- Auto Login al recargar la aplicación
- Navbar dinámica según estado de autenticación

### 📦 Productos

- Modelo Product en PostgreSQL
- Prisma ORM
- Seed inicial de productos
- Endpoint para listado de productos
- Endpoint para detalle de producto
- Integración con React Query
- Product Cards reutilizables
- Grid responsive de productos
- Consumo de datos en tiempo real desde PostgreSQL

---

## 🔐 Flujo de autenticación

```txt
Login
  │
  ▼
Backend valida credenciales
  │
  ▼
Generación JWT
  │
  ▼
Frontend almacena token
  │
  ▼
Zustand Persist
  │
  ▼
Axios Interceptor
  │
  ▼
Endpoint /me
  │
  ▼
Rutas protegidas
```

---

## 🗄️ Base de datos

### User

```txt
id
name
email
password
role
createdAt
updatedAt
```

### Product

```txt
id
title
description
price
stock
imageUrl
createdAt
updatedAt
```

---

## ⚙️ Instalación

### Clonar repositorio

```bash
git clone https://github.com/TU_USUARIO/techstore-fullstack.git
```

---

## Backend

```bash
cd techstore-server

npm install
```

Crear archivo `.env`

```env
DATABASE_URL="YOUR_DATABASE_URL"
JWT_SECRET="YOUR_SECRET"
```

Ejecutar migraciones:

```bash
npx prisma migrate dev
```

Generar Prisma Client:

```bash
npx prisma generate
```

Ejecutar seed:

```bash
npx tsx prisma/seed.ts
```

Iniciar servidor:

```bash
npm run dev
```

Servidor disponible en:

```txt
http://localhost:5000
```

---

## Frontend

```bash
cd techstore-client

npm install

npm run dev
```

Aplicación disponible en:

```txt
http://localhost:5173
```

---

## 📡 API Endpoints

### Auth

#### Register

```http
POST /api/auth/register
```

Body:

```json
{
  "name": "Tomas",
  "email": "tomas@test.com",
  "password": "12345678"
}
```

---

#### Login

```http
POST /api/auth/login
```

Body:

```json
{
  "email": "tomas@test.com",
  "password": "12345678"
}
```

---

#### Current User

```http
GET /api/auth/me
```

Headers:

```txt
Authorization: Bearer TOKEN
```

---

### Products

#### Get Products

```http
GET /api/products
```

---

#### Get Product

```http
GET /api/products/:id
```

---

## 📚 Conceptos aplicados

- Feature Based Architecture
- Authentication with JWT
- Route Protection
- REST API Design
- State Management
- Type Safety
- React Query Caching
- Prisma ORM
- Database Migrations
- Form Validation
- Global State Management
- Clean Architecture
- Scalable Folder Structure
- Reusable Components
- Custom Hooks
- Protected Routes
- API Layer Abstraction

---

## 🎯 Objetivos del proyecto

- Aplicar arquitectura Fullstack moderna.
- Desarrollar una API REST escalable.
- Implementar autenticación segura con JWT.
- Gestionar estado global mediante Zustand.
- Consumir APIs con React Query.
- Aplicar TypeScript tanto en frontend como backend.
- Utilizar PostgreSQL con Prisma ORM.
- Construir una aplicación preparada para crecer mediante módulos independientes.

---

## 📈 Próximas funcionalidades

### Productos

- Product Detail Page
- Categorías
- Búsqueda de productos
- Filtros avanzados
- Paginación

### Ecommerce

- Carrito de compra
- Gestión de cantidades
- Persistencia del carrito
- Checkout

### Pagos

- Integración con Stripe

### Pedidos

- Historial de pedidos
- Estado de pedidos

### Administración

- Dashboard Admin
- Gestión de productos
- Gestión de usuarios
- Gestión de pedidos

### Seguridad

- Refresh Tokens
- Role Based Authorization
- HTTP Only Cookies

---

## 👨‍💻 Autor

