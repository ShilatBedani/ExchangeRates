FROM node:22-alpine3.19

WORKDIR /app

COPY package.json ./

RUN npm install axios --save-dev @babel/plugin-proposal-private-property-in-object
RUN npm install @emotion/react @emotion/styled
RUN npm install @mui/x-charts
RUN npm install @mui/joy @emotion/react @emotion/styled
RUN npm install @mui/material @emotion/react @emotion/styled
RUN npm install @mui/material 
RUN npm install @mui/material @mui/styled-engine-sc styled-components
RUN npm install @fontsource/roboto
RUN npm install @mui/icons-material
RUN npm i react-router-dom
RUN npm i react-router
RUN npm i react-redux
RUN npm i redux

COPY . .

EXPOSE 3000

CMD ["npm", "start"]