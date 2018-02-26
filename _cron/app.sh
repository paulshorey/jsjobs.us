#!/bin/bash
# attempt to renew SSL before messing with port :80
# /opt/letsencrypt/letsencrypt-auto renew
# /etc/init.d/nginx reload

# start app
# iptables -A PREROUTING -t nat -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 3000
# ufw allow 80/tcp
# iptables -A PREROUTING -t nat -i eth0 -p tcp --dport 443 -j REDIRECT --to-port 1443
# ufw allow 443/tcp

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
pm2 start bin/www;

# app
cd /www/ps-jobs/app;
npm install;
npm run build;
pm2 start app.js;

# database
npm run mongod