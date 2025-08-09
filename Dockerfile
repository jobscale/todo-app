FROM node:lts-bookworm-slim AS builder
WORKDIR /home/node
ENV DEBIAN_FRONTEND=noninteractive
RUN apt-get update && apt-get install -y --no-install-recommends python3-pip \
 && apt-get clean && rm -fr /var/lib/apt/lists/*
USER node
COPY --chown=node:staff package.json .
RUN npm i

COPY --chown=node:staff .eslintrc.js .eslintrc.js
COPY --chown=node:staff babel.config.js babel.config.js
COPY --chown=node:staff vue.config.js vue.config.js
COPY --chown=node:staff public public
COPY --chown=node:staff docs/CNAME docs/CNAME
COPY --chown=node:staff src src
RUN npm run build
RUN rm -fr node_modules && npm i --no-save serve

FROM node:lts-bookworm-slim
SHELL ["bash", "-c"]
WORKDIR /home/node
COPY --from=builder /home/node/docs docs
COPY --from=builder /home/node/node_modules node_modules
COPY package.json .
EXPOSE 3000
CMD ["bash", "-c", "PORT=3000 npm start"]
