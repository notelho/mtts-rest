docker container
jest tests
test prod run with pm2
fix dependencies

"start": "npm run build && npm run api",
"api": "pm2 start dist/index.js --watch --name mining-backend",
"build": "ts-node src/scripts/build.ts",
"build-linux": "rm -rf dist/ && tsc && gulp minify",
"build-windows": "rd /s /q dist && tsc && gulp minify",
"watch": "nodemon -e ts -w ./src -x npm run watch:serve",
"watch:serve": "npx ts-node src/index.ts"

"watch": "nodemon -e ts -w ./src -x npm run watch:serve",
"watch:serve": "npx ts-node src/app.ts",
"build": "gulp clean && tsc && gulp minify",
"start": "npm run build && npm run api",
"api": "pm2 start dist/index.js --name mtts-rest"

"start": "npm run build && npx pm2 start ecosystem.config.js",
"stop": "npx pm2 stop mtts-rest",
"build": "npm run build:clean && npm run build:transpile && npm run build:minify",
"build:clean": "gulp clean",
"build:minify": "gulp minify",
"build:transpile": "npx tsc",
"logs": "npx pm2 log",
"clear": "npx pm2 flush mtts-rest"
