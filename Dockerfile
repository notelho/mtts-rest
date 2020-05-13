FROM node:12.16.3
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm run build
ENTRYPOINT [ "node", "dist/app.js" ]
