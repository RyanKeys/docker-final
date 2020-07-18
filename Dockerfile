FROM node:8.7.0
COPY . /app
WORKDIR /app
RUN npm install express mongodb body-parser
EXPOSE 5000
CMD ["npm", "start"]