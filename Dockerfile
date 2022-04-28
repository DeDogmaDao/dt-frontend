FROM node:14 as dependencies
USER root
WORKDIR /app/frontend/src


COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

EXPOSE 3000