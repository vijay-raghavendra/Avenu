# Avenu – Full Stack App with Docker

This is a full-stack assignment project that includes:

- ✅ Frontend: Node.js + Express (submits form data)
- ✅ Backend: Python Flask (processes the submitted data)
- ✅ Dockerized: Both services run using Docker Compose
- ✅ Images published to Docker Hub

## 🏗️ Folder Structure

root/
├── backend/
│ ├── app.py
│ ├── requirements.txt
│ └── Dockerfile
├── frontend/
│ ├── src/
│ │ └── index.js
| | |__form.html
│ ├── package.json
│ └── Dockerfile
├── docker-compose.yml
└── .gitignore


## 🐳 Docker Hub Images

- [Frontend](https://hub.docker.com/r/vijju18/avenu-frontend)
- [Backend](https://hub.docker.com/r/vijju18/avenu-backend)

## 🚀 Run Locally (with Docker)

```bash
docker compose up --build
