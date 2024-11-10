# # Use Node image for building assets
# FROM node:18-alpine AS builder
# WORKDIR /app
# COPY package.json yarn.lock ./
# RUN yarn install
# COPY . .

# # Web build files are copied from the local machine, so no need for `npx expo export:web` here
# COPY web-build ./web-build

# # Use Nginx to serve the static files
# FROM nginx:alpine
# COPY --from=builder /app/web-build /usr/share/nginx/html

# # Expose port 80 and start Nginx
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]
# Stage 1: Build the project using Node.js
FROM node:18-alpine AS builder

# Set working directory inside the container
WORKDIR /app

# Copy package.json and yarn.lock to install dependencies
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the project files
COPY . .

# Build the project for web
RUN npx expo export:web

# Stage 2: Serve the built files using Nginx
FROM nginx:alpine

# Copy the built files from the builder stage
COPY --from=builder /app/web-build /usr/share/nginx/html

# Copy custom Nginx config for SPA routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 for web traffic
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
