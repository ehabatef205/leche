FROM node:14.19.3

WORKDIR /React_front_leche

COPY package.json .

RUN npm install --force

COPY . .

EXPOSE 3060

CMD ["npm","run","start"]