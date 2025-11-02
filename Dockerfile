FROM node:20-alpine AS builder
WORKDIR /app/frontend

COPY package*.json ./
RUN npm install

COPY . .

RUN ./node_modules/.bin/vite build

FROM nginx:alpine
COPY --from=builder /app/frontend/dist /usr/share/nginx/html

EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]