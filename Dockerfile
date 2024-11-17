# Imagen base de Node.js
FROM node:20

# Configurar permisos de usuario
USER root

# Actualiza el sistema e instala herramientas básicas
RUN apt-get update && apt-get install -y \
    wget \
    nano

# Limpia la caché de npm y actualiza a una versión específica
RUN npm cache clean --force
RUN npm install -g npm@8.12.1

# Instala dependencias globales necesarias
RUN npm install prisma -g \
    && npm install cors -g \
    && npm install express -g \
    && npm install jsonwebtoken -g \
    && npm install nodemon -g \
    && npm install @prisma/client -g

# Crea los directorios para los módulos
RUN mkdir -p /usr/app/Usuarios \
    && mkdir -p /usr/app/Destino \
    && mkdir -p /usr/app/Pagos \
    && mkdir -p /usr/app/Tiquete

# Define el directorio de trabajo general
WORKDIR /usr/app

# Copia los package.json de cada módulo
COPY ./Usuarios/package*.json /usr/app/Usuarios/
COPY ./Destino/package*.json /usr/app/Destino/
COPY ./Pagos/package*.json /usr/app/Pagos/
COPY ./Tiquete/package*.json /usr/app/Tiquete/

# Instala las dependencias específicas de cada módulo
RUN npm install --prefix /usr/app/Usuarios
RUN npm install --prefix /usr/app/Destino
RUN npm install --prefix /usr/app/Pagos
RUN npm install --prefix /usr/app/Tiquete

# Copia el código fuente de cada módulo al contenedor
COPY ./Usuarios /usr/app/Usuarios/
COPY ./Destino /usr/app/Destino/
COPY ./Pagos /usr/app/Pagos/
COPY ./Tiquete /usr/app/Tiquete/

# Copia los archivos .env de cada módulo al contenedor
COPY ./Usuarios/.env /usr/app/Usuarios/.env
COPY ./Destino/.env /usr/app/Destino/.env
COPY ./Pagos/.env /usr/app/Pagos/.env
COPY ./Tiquete/.env /usr/app/Tiquete/.env

# Ejecuta prisma generate para cada módulo que lo necesite
RUN prisma generate --schema=/usr/app/Usuarios/prisma/schema.prisma
RUN prisma generate --schema=/usr/app/Destino/prisma/schema.prisma
RUN prisma generate --schema=/usr/app/Pagos/prisma/schema.prisma
RUN prisma generate --schema=/usr/app/Tiquete/prisma/schema.prisma

# Exponer los puertos usados por los módulos
EXPOSE 3000 3007 3008 3003

# Copiar el script de inicio
COPY start.sh /usr/app/start.sh
RUN chmod +x /usr/app/start.sh

# Ejecutar el script para iniciar todos los servicios
CMD ["/usr/app/start.sh"]
