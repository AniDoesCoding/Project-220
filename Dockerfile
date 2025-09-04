FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Build frontend
RUN npm run build

# Expose ports
EXPOSE 8080

CMD ["npm", "start"]