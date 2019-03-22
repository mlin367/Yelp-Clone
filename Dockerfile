FROM node:11

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

ARG PORT

ENV PORT 443

EXPOSE 443

RUN npm run build

CMD [ "npm", "start"]