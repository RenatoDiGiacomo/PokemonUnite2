# Stage 1: Build the Vite React project
FROM node:20 AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN pnpm install -g pnpm & pnpm type-check & pnpm install

# Copy the rest of the project files
COPY . .

ARG NODE_ENV=production

# Set the environment variables from the .env.example file
ARG VITE_APP_NAME="Vite App"
ARG VITE_AUTH_STORAGE_KEY="auth"
ARG VITE_BACKEND_API_URL="http://localhost:5000"
ARG VITE_HOME_PAGE="/users"

# Set the environment variable
ENV NODE_ENV=${NODE_ENV}
ENV VITE_APP_NAME=${VITE_APP_NAME}
ENV VITE_AUTH_STORAGE_KEY=${VITE_AUTH_STORAGE_KEY}
ENV VITE_BACKEND_API_URL=${VITE_BACKEND_API_URL}
ENV VITE_HOME_PAGE=${VITE_HOME_PAGE}

# Build the project for production
RUN pnpm build

# Stage 2: Serve the project with Nginx
FROM nginx:latest

# Copy the built files from the previous stage to Nginx's default folder
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom Nginx configuration if needed
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Expose the default port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
