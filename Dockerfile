# syntax=docker/dockerfile:1

# Comments are provided throughout this file to help you get started.
# If you need more help, visit the Dockerfile reference guide at
# https://docs.docker.com/engine/reference/builder/

ARG NODE_VERSION=20

FROM node:${NODE_VERSION}-alpine as base

WORKDIR /usr/src/app

COPY . .

RUN npm ci && npm run build

EXPOSE 3000

CMD npm start
