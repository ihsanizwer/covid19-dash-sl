FROM node:12-alpine
COPY package.json ./
COPY yarn.lock ./
RUN npm install node-sass@4.13
RUN yarn install
COPY . .
CMD ["yarn","start"]
