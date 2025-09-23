# Stage 1: Build the Angular app
FROM node:20 AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build -- --configuration=production

# Stage 2: Serve the app with Nginx
FROM nginx:alpine
COPY --from=build /app/dist/Noj_App/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
