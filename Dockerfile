# syntax=docker/dockerfile:1

ARG NODE_VERSION=20
FROM node:${NODE_VERSION}-alpine as build
WORKDIR /app
COPY . .
RUN npm ci && npm run build
CMD npm start
# EXPOSE 3000



# FROM nginx:alpine AS runtime
# COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
# COPY --from=build /app/.output /usr/share/nginx/html
# EXPOSE 8080