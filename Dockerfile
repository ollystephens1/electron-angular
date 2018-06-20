# Build Angular application
FROM node:8.11.1 as builder

COPY . /electron-app

WORKDIR /electron-app

RUN npm install -g @angular/cli
RUN npm install --save-dev electron
RUN npm install
RUN npm run electron-aot