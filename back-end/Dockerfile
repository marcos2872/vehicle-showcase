FROM node:16.14-alpine

WORKDIR /srv/back-end
USER root

COPY package*.json ./
RUN ["npm", "i"] 
COPY . .
CMD ["npm", "run", "dev"]


