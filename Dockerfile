FROM node:bullseye-slim as builder
WORKDIR /home/node
COPY . .
RUN chown -R node. .
USER node
RUN rm -fr node_modules package-lock.json yarn.lock
RUN npm i || (npm i core-js@3 && npm i)
RUN npm run build
RUN rm -fr node_modules && npm i --no-save serve

FROM node:bullseye-slim
SHELL ["bash", "-c"]
WORKDIR /home/node
COPY --from=builder /home/node/dist dist
COPY --from=builder /home/node/node_modules node_modules
COPY package.json .
EXPOSE 80
CMD ["bash", "-c", "PORT=80 npm start"]
