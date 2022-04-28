FROM node:14
USER root
WORKDIR /app/frontend/src


COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .
RUN chmod +x run.sh
EXPOSE 3000