#!/bin/bash

# deploy
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/gitlab
cd /www/ps-jobs
git add .;
git reset HEAD -\-hard;
git pull;
npm install;

# api
cd /www/ps-jobs/api;
npm install;

# app
cd /www/ps-jobs/app;
npm install;
npm run build;

# all
pm2 restart all;