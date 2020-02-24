FROM node:10.15.3-alpine as builder
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

#FROM nginx

#COPY --from=builder /app/build /usr/share/nginx/html

COPY --from=builder /app/build /tmp

# docker build -t gauravjain449/client-app .
# docker run -P -d client-app-prod