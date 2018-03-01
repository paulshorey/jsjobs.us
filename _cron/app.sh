#!/bin/bash
# iptables -A PREROUTING -t nat -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 3000
# ufw allow 80/tcp
# iptables -A PREROUTING -t nat -i eth0 -p tcp --dport 443 -j REDIRECT --to-port 1443
# ufw allow 443/tcp

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
pm2 start bin/www;

# app
cd /www/ps-jobs/app;
yarn install;
pm2 start build/server.js;

# deploy
cd /www/ps-jobs
pm2 start _deploy.js;