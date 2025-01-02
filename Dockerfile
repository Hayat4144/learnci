
# Use official Node.js image from Docker Hub
FROM node:22-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your app’s code
COPY . .

# Expose port 3000 for the app
EXPOSE 4000

# Command to run the app
CMD ["npm", "start"]
