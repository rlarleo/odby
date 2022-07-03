FROM node:alpine

WORKDIR /

COPY package.json ./

RUN npm install

COPY . .

#nodemon 사용 
CMD ["npm", "run", "start"]