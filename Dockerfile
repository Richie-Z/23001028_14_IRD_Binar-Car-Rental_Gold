FROM docker.io/library/node:24-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
ENV NODE_OPTIONS=--openssl-legacy-provider

RUN npm run build

FROM docker.io/nginxinc/nginx-unprivileged:1.27-alpine AS runtime
COPY --from=build /app/dist /usr/share/nginx/html
COPY .containerize/nginx-spa.conf.template /etc/nginx/templates/default.conf.template
ENV PORT=8080
EXPOSE 8080
