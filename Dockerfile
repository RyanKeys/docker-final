FROM node:8.7.0
COPY . /app
WORKDIR /app
RUN npm install express mongoose body-parser
EXPOSE 80
CMD ["npm", "start"]