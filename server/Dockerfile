FROM node:8.7.0
WORKDIR /usr/src/app/server
ADD package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]