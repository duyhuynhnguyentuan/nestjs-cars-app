FROM node:21 AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/api

COPY package.json .
COPY package-lock.json .
RUN npm install glob rimraf
RUN npm install --global @nestjs/cli
RUN npm install --production=true

RUN apt-get -q update && apt-get -qy install netcat-openbsd


COPY . .

RUN npm run build

CMD ["sh", "-c", "npm run migrate:create && npm run migrate:up && npm run start:prod"]
