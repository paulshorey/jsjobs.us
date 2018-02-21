#!/bin/bash

eval "$(ssh-agent -s)";
ssh-add ~/.ssh/gitlab;
cd /www/ps-jobs;
git add .;
git reset HEAD -\-hard;
git pull;
npm install;

npm run build;
pm2 restart all;