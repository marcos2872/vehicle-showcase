FROM node:16.14-alpine
WORKDIR /srv/storage
COPY package* ./
COPY yarn* ./
RUN yarn
COPY . .
ENTRYPOINT ["yarn", "dev"]