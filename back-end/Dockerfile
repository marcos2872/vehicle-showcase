FROM node:16.14-alpine

WORKDIR /srv/back-end
USER root

COPY package*.json ./
COPY yarn* ./
RUN ["yarn"] 
COPY . .

CMD ["yarn", "dev"]


