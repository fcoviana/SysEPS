FROM --platform=linux/amd64 node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

# RUN npm start
EXPOSE 3000

CMD ["npm", "start"]
