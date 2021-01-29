FROM node:alpine

WORKDIR  /app

COPY package*.json .

RUN npm install

COPY . .

RUN npm install

RUN npm uninstall bcrypt

RUN npm install bcrypt

RUN npm run build

ENV MONGO_URI=mongodb+srv://choton654:9804750147@cluster0-prdkh.mongodb.net/gatsby-media?w=majority&retryWrites=true

EXPOSE 3000

CMD [ "npm", "start" ]