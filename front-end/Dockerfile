FROM node:16.14-alpine

WORKDIR /srv/front-end
USER root

COPY package* ./
COPY yarn* ./
RUN yarn
COPY . .

ENTRYPOINT ["yarn", "dev"]