cp -r server.js index.html favicon.ico dist deploy
rsync -r deploy/ front_deploy:~/front

