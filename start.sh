#!/bin/bash

# Inicia el servidor de cada módulo cargando su respectivo .env
echo "Iniciando el servidor de Usuarios..."
export $(grep -v '^#' /usr/app/Usuarios/.env | xargs)
nodemon /usr/app/Usuarios/models/Server.js &

echo "Iniciando el servidor de Destino..."
export $(grep -v '^#' /usr/app/Destino/.env | xargs)
nodemon /usr/app/Destino/models/Server.js &

echo "Iniciando el servidor de Pagos..."
export $(grep -v '^#' /usr/app/Pagos/.env | xargs)
nodemon /usr/app/Pagos/models/Server.js &

echo "Iniciando el servidor de Tiquete..."
export $(grep -v '^#' /usr/app/Tiquete/.env | xargs)
nodemon /usr/app/Tiquete/models/Server.js &

# Mantiene el contenedor ejecutándose
wait
