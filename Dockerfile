FROM node:14 as dependencies
USER root
WORKDIR /app/frontend/src

ENV ROBOTS_TXT=$ROBOTS_TXT
ARG ROBOTS_TXT=$ROBOTS_TXT

COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

EXPOSE 3000
RUN  echo $ROBOTS_TXT > /app/frontend/src/public/robots.txt