FROM node:10

WORKDIR /usr/src/app

COPY ./projects/node/package*.json ./

RUN npm install

COPY ./projects/node .

EXPOSE 8000

CMD [ "npm", "start" ]