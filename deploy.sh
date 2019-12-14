#!/bin/bash

DEPLOY_ITEMS="server.js index.html favicon.ico dist"
DEPLOY_DIR="deploy/"

SERVER_ADDR="front_deploy"
SERVER_DIR="~/front"

# cp -r server.js index.html favicon.ico dist deploy
# rsync -r deploy/ front_deploy:~/front

cp -r $DEPLOY_ITEMS $DEPLOY_DIR
rsync -r $DEPLOY_DIR $SERVER_ADDR:$SERVER_DIR

