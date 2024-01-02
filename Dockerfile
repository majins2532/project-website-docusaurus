FROM ubuntu:22.04

ENV DEBIAN_FRONTEND noninteractive
ENV TZ=Asia/Bangkok
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# Replace shell with bash so we can source files
RUN rm /bin/sh && ln -s /bin/bash /bin/sh
# make sure apt is up to date
RUN apt-get update \
    && apt-get install -y curl \
    && apt-get -y autoclean nginx locales build-essential libssl-dev

ENV NVM_DIR /usr/local/nvm
ENV NODE_VERSION 18.19.0

# Install nvm with node and npm
RUN curl --silent -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.2/install.sh | bash

RUN source $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default

ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules
ENV PATH $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH


WORKDIR /usr/app
RUN npx create-docusaurus@latest my-website classic --typescript
RUN npm install -g npm@10.2.5

WORKDIR /usr/app/my-website
RUN npm install --save @docusaurus/theme-live-codeblock --typescript
RUN npm install --save @docusaurus/theme-search-algolia --typescript
RUN npm install --save @docusaurus/theme-mermaid --typescript    
# RUN npm run docusaurus docs:version 0.0

# Install app dependencies
# RUN npm run build
EXPOSE 3000

#CMD ["npx", "docusaurus", "start", "--host", "0.0.0.0"]