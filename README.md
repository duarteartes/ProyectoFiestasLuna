# ProyectoFiestasLuna

Aplicación web para mostrar y gestionar los programas de fiestas del pueblo de Luna (Zaragoza), desarrollada con **Angular** para el frontend y **Node.js + MySQL** para el backend.

---

## 📦 Estructura del proyecto

```
ProyectoFiestasLuna/
├── api/                # Backend (Node.js + Express + MySQL)
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── sql/
│   ├── db.js
│   ├── initDB.js
│   ├── server.js
│   └── .env
├── src/                # Frontend (Angular)
│   └── ...
├── README.md
└── ...
```

---

## ⚙️ Requisitos previos

- Node.js (v18 o superior)
- MySQL Server
- Angular CLI (`npm install -g @angular/cli`)

---

## 🚀 Frontend (Angular)

### 📦 Instalación

```bash
npm install
```

### ▶️ Servidor de desarrollo

```bash
ng serve
```

Abre tu navegador en [http://localhost:4200](http://localhost:4200)

---

## 🛠 Backend (Node.js + Express + MySQL)

### 📦 Instalación

```bash
cd api
npm install
```

### ⚙️ Configuración de entorno

Crea un archivo `.env` dentro de `/api` con tus credenciales de MySQL:

```env
DB_HOST=localhost
DB_USER=tu_usuario_mysql
DB_PASSWORD=tu_contraseña
DB_NAME=fiestas_luna
DB_PORT=3306
PORT=3000
```

### 🧱 Inicializar base de datos

Esto crea la base de datos y todas las tablas:

```bash
node initDB.js
```

### ▶️ Ejecutar servidor backend

```bash
node server.js
```

Por defecto corre en: [http://localhost:3000](http://localhost:3000)

---

## 📡 Endpoints disponibles

Una vez que el backend está en funcionamiento, puedes acceder a las siguientes rutas:

| Tabla         | Endpoints                                            |
|---------------|------------------------------------------------------|
| Años          | `GET /api/anios`                                     |
| Fiestas       | `GET /api/fiestas`, `POST /api/fiestas`              |
| Eventos       | `GET /api/eventos/:fiesta_id`, `POST /api/eventos`   |
| Noticias      | `GET /api/noticias`, `POST /api/noticias`            |
| Saludos       | `GET /api/saludos`, `POST /api/saludos`              |
| Pregoneros    | `GET /api/pregoneros`, `POST /api/pregoneros`        |
| Damas         | `GET /api/damas`, `POST /api/damas`                  |
| Colaboradores | `GET /api/colaboradores`, `POST /api/colaboradores`  |

---

## 🧪 Testing (opcional)

Por ahora no hay tests automatizados, pero puedes probar los endpoints usando Postman, Thunder Client o cURL.

---

## 📌 Notas

- La aplicación está pensada para ser escalable año tras año.
- Toda la información se estructura por años y tipo de fiesta (`mayo` y `monlora`).
- El backend sirve como API RESTful, y se puede acoplar fácilmente a cualquier frontend moderno.

---

## 📬 Contacto

Desarrollado por Silvia Duarte Largo 
[duarte.eartes@gmail.com](mailto:duarte.eartes@gmail.com)