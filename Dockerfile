FROM node:lts-bullseye as builder
WORKDIR /home/node
COPY --chown=node:staff package.json package.json
USER node
RUN npm i

COPY --chown=node:staff babel.config.js babel.config.js
COPY --chown=node:staff vue.config.js vue.config.js
COPY --chown=node:staff public public
COPY --chown=node:staff src src
RUN npm run build
RUN rm -fr node_modules && npm i --no-save serve

FROM node:lts-bullseye-slim
SHELL ["bash", "-c"]
WORKDIR /home/node
COPY --from=builder /home/node/docs docs
COPY --from=builder /home/node/node_modules node_modules
COPY package.json .
EXPOSE 3000
CMD ["bash", "-c", "PORT=3000 npm start"]
