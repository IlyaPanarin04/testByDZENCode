FROM node:latest

WORKDIR /usr/src/app


COPY app/package.json ./

RUN npm install

COPY app/docker/src ./src

RUN npm run build

EXPOSE 4000

CMD ["npm", "start"]