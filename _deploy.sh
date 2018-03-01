#!/bin/bash

# git
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/gitlab
cd /www/ps-jobs
git add .;
git reset HEAD -\-hard;
git pull;
yarn install;

# api
cd /www/ps-jobs/api;
yarn install;
pm2 restart www;

# app
cd /www/ps-jobs/app;
yarn install;
pm2 restart server;

# deploy
cd /www/ps-jobs
pm2 restart _deploy;