#!/bin/bash

# git
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/gitlab
cd /www/$(hostname)
git add \.;
git reset HEAD \-\-hard;
git pull;
yarn install;

# api
cd /www/$(hostname)/api;
yarn install;
pm2 restart www;

# app
cd /www/$(hostname)/app;
yarn install;
pm2 restart server;

# deploy
cd /www/$(hostname)
pm2 restart _deploy;

# upload to CDN
#cd app; node _cdn.js; #this should be done by "npm run build"