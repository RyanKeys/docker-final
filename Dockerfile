FROM node:8.7.0
COPY . /app
WORKDIR /app/server
RUN npm install
EXPOSE 5000
CMD ["npm", "start"]