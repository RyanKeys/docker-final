FROM node:8.7.0
ADD package*.json ./
WORKDIR /usr/src/app/server
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]