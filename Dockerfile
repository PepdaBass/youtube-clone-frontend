FROM node:latest as build 

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./

RUN npm ci 

COPY ./ ./

RUN npm run build

FROM nginx:latest as prod

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g" ,"daemon off;"]