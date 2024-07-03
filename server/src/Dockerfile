FROM node:17.0.0

WORKDIR /app

RUN npm cache clean --force
RUN npm install mongodb mongoose
RUN npm install axios express
RUN npm install cors node-cron
RUN npm install jest supertest

COPY . .

COPY package.json /app/

COPY  . /app

CMD ["npm", "test"]