FROM node:16-bullseye-slim

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]

RUN npm install

COPY ["dist", "node_modules", ".storybook", "./"]

CMD [ "npm", "start" ]
