FROM node:16.14-alpine

WORKDIR /srv/back-end
USER root

COPY package*.json ./
RUN ["npm", "i"] 
COPY . .

RUN ["npm", "run", "db"]
CMD ["npm", "run", "dev"]


