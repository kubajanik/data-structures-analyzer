FROM node:20-alpine as generator
WORKDIR /data
COPY . .
RUN npm install
RUN npm run generate-database

FROM mongo:latest

COPY . .
COPY --from=generator ./data/ .
RUN ["chmod", "+x", "init.sh"]
CMD ./init.sh