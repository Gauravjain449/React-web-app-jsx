FROM node:10.15.3-alpine as builder
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build
#COPY --from=builder /app/build .

#FROM nginx

#COPY --from=builder /app/build /usr/share/nginx/html



# docker build -t gauravjain449/client-app .
# docker run -P -d client-app-prod