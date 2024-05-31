FROM node:20-alpine3.16

WORKDIR /app

COPY package*.json /app

RUN npm install --production

COPY . .

EXPOSE 8080

CMD [ "node", "./index.js"]
