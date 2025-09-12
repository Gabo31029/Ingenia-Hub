# Ingenia Hub

Proyecto fullstack con **Django (backend)** y **Vue 3 + Vite + Tailwind (frontend)**.  
Este README contiene todas las instrucciones necesarias para que cualquier integrante del equipo pueda levantar el proyecto en su entorno local.

---

## 🚀 Requisitos previos

Antes de empezar, asegúrate de tener instalado en tu computadora:

- [Python 3.12+](https://www.python.org/downloads/)
- [PostgreSQL 15+](https://www.postgresql.org/download/)
- [Node.js 20+](https://nodejs.org/en/) (incluye `npm`)
- [Git](https://git-scm.com/)

---

## 📂 Paso 1: Clonar el repositorio

Abre una terminal y ejecuta:

```bash
https://github.com/Gabo31029/Ingenia-Hub.git
cd ingenia-hub

En este repositorio encontrarás dos carpetas principales:

backend/ → Proyecto Django (API REST).

frontend/ → Proyecto Vue 3 (interfaz de usuario).
```


## 📂 Paso 2: Clonar el repositorio

Abre una terminal y ejecuta:
```bash
cd backend
```
Crea y activa un entorno virtual:
### En Windows:
```bash
python -m venv venv
venv\Scripts\activate
```
### En Linux/Mac
```bash
python3 -m venv venv
source venv/bin/activate
```
### Instala las dependencias
```bash
pip install -r requirements.txt
```
### Crea la db en PostgreSQL en tu laptop(en el pgadmin)
```bash
CREATE DATABASE ingeniaHub;
```
DB:ingeniaHub
User:postgres
password:root
host:locaclhost
port 5432
### Aplica las migraciones
```bash
python manage.py migrate
```
### Crea tu superusuario
```bash
python manage.py createsuperuser
```
tendras que seguir las instrucciones, poner correo no es necesario, si no quieres ponerlo, solo pulsa enter
### Inicia el servidor de desarrollo
```bash
python manage.py runserver
```

## Paso 3: Configurar el Frontend (Vue 3 + Vite + Tailwind)
En otra terminal(sin cerrar el backend), entra a la carpeta frontend
```bash
cd frontend
```
### Instala las dependencias
```bash
npm install
```
### Inicia el servidor de desarrollo
```bash
npm run dev
```
Ahora para que puedas ver lo que hay, tendrás que acceder a la url que contiene "localhost" para poder observar lo de tu front
