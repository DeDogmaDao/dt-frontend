FROM node:14 as dependencies
USER root
WORKDIR /app/frontend/src

ENV ROBOTS_TXT_FILE=$ROBOTS_TXT_FILE
ARG ROBOTS_TXT_FILE=$ROBOTS_TXT_FILE

COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

EXPOSE 3000
RUN  echo $ROBOTS_TXT_FILE > /app/frontend/src/public/robots.txt