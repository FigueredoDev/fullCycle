FROM node:20-alpine3.16

RUN apk add --no-cache netcat-openbsd

WORKDIR /app

COPY package*.json /app

RUN npm install --production

COPY . .

CMD [ "node", "./index.js"]
