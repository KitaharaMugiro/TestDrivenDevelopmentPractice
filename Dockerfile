FROM node:8.1.2-alpine

RUN apk add --no-cache --virtual .persistent-deps \
        # for node-sass module
        make \
    # Install node packages
    && npm install --silent --save-dev -g \
        typescript \
	ts-node \ 
	mocha

# Set up the application directory
VOLUME ["/app"]
WORKDIR /app

CMD ["npm", "install"]
