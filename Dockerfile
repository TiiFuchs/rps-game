FROM node AS build
COPY . /app
WORKDIR /app
RUN set -eux; \
    npm install; \
    npm run build

FROM nginx:alpine
COPY --from=build /app/dist/ /usr/share/nginx/html/
