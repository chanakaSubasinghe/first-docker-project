FROM node:10

WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY ./projects/node/package*.json ./

RUN npm install

COPY ./projects/node .

EXPOSE 8000

CMD [ "npm", "start" ]