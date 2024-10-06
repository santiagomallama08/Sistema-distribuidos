FROM node:20

USER root

RUN apt-get update && apt-get install -y \
    wget \
    nano

RUN npm cache clean --force

RUN npm install -g npm@8.12.1

RUN npm install prisma -g \
    && npm install cors -g \
    && npm install express -g \
    && npm install jsonwebtoken -g \
    && npm install nodemon -g \
    && npm install @prisma/client -g

RUN mkdir -p /usr/userAPI

WORKDIR /usr/userAPI

COPY usuarios/package*.json /usr/userAPI

RUN npm install  # Instala las dependencias del package.json

COPY usuarios /usr/userAPI

RUN prisma generate

CMD ["nodemon", "app.js"]
