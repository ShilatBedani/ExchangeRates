FROM node:18.0.0

WORKDIR /app

RUN npm cache clean --force
RUN npm install jest
RUN npm install --save-dev enzyme enzyme-adapter-react-16
RUN npm install --save-dev @testing-library/react@"*" --legacy-peer-deps
RUN npm install enzyme --force
RUN npm install --save-dev --legacy-peer-deps @babel/preset-react babel-jest


COPY package.json /app

COPY  . /app

CMD ["npm", "test"]