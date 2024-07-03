FROM node:22-alpine3.19

WORKDIR /app

RUN npm install mongodb

RUN npm install mongoose

RUN npm install axios 

RUN npm install axios express

RUN npm install cors

RUN npm install node-cron

COPY . .

CMD ["node","/app/src/index.js"]