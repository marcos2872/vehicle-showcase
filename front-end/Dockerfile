FROM node:16.14-alpine

WORKDIR /srv/front-end
USER root

COPY package*.json ./
COPY vite.config.ts ./
RUN ["npm", "i"] 
COPY . .

CMD ["npm", "run", "dev"]