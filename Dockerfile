FROM node:11

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

ARG PORT

ENV PORT 3000

EXPOSE 3000

RUN npm run build

CMD [ "npm", "start"]