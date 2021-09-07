FROM node:14-alpine as stage-build
WORKDIR /app
COPY . .
RUN yarn && yarn build

FROM nginx:1.15
COPY --from=stage-build /app/dist/shared-library/ /usr/share/nginx/html
