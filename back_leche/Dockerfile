FROM node:14.19.3

WORKDIR /back_leche

COPY package.json .

RUN npm install --force

COPY . .

EXPOSE 7050

CMD ["npm","run","start"]