FROM node:14.19.3

WORKDIR /pay_leche_App

COPY package.json .

RUN npm install --force

COPY . .

EXPOSE 7051

CMD ["npm","run","start"]