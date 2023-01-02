FROM node:18 AS builder

WORKDIR /stage

COPY package.json .
RUN yarn

COPY . .
RUN yarn build
RUN yarn postinstall

FROM node:18-alpine

WORKDIR /app
COPY --from=builder /stage/.output /app/

CMD [ "node", "server/index.mjs" ]