# Template node/ts rest api

This is my api rest template in node / typescript. Feel free to clone it, understand it and use it however you want.

## Installation

Just install all dependencies with [NPM](https://www.npmjs.com/).

```bash
npm install
```

## Running

You can run it in three main ways:

- with nodemon and ts-node, as development

```bash
npm run watch
```

- with pm2, as a server in a process

```bash
npm run start
```

- with docker, as a server in a container

```bash
docker build . --tag mtts-rest
docker run --publish 3000:3000 --detach mtts-rest
```

### Usage

The application is currently just a template of settings, folders and features. Just keeping track of how things work is enough to create new services and models.

### Environment

The environments of this template project are basically based on the following attributes:

```bash
NODE_ENV=development # development or production
JWT_SECRET=supersecretapikey # string jwt secret
LOG_LEVEL=silly # winston logger level (see https://www.npmjs.com/package/winston)
LOG_LISTENER=true # listener that logs all requests body, query, and params
API_PORT=3000 # running port
API_PREFIX=/api # api path prefix
API_PUBLIC=/public # public path prefix
```
Check the "env" folder for a complete example of development and production .env.

## License
[MIT](https://github.com/notelho/mtts-rest/blob/master/LICENSE)
