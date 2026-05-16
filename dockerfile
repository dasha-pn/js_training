# Use the official Node.js image from Docker Hub
FROM node:22

# Create and set the working directory inside the container
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your application code
COPY . .

# Expose the port your app runs on
EXPOSE 3000

# Start the application
CMD [ "npm", "start" ]