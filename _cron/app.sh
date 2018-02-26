#!/bin/bash

# deploy
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/gitlab
cd /www/ps-jobs
git add .;
git reset HEAD -\-hard;
git pull;
yarn install;
pm2 start _deploy.js;

# api
cd /www/ps-jobs/api;
yarn install;
pm2 start bin/www;

# app
cd /www/ps-jobs/app;
yarn install;
pm2 start app.js;