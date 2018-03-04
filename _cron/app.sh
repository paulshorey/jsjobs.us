#!/bin/bash
# iptables -A PREROUTING -t nat -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 3000
# ufw allow 80/tcp
# iptables -A PREROUTING -t nat -i eth0 -p tcp --dport 443 -j REDIRECT --to-port 1443
# ufw allow 443/tcp

# git
eval "$(ssh-agent -s)";
ssh-add ~/.ssh/gitlab;
cd /www/$(hostname);
git add .;
git reset HEAD -\-hard;
git pull;
yarn install;

# api
cd /www/$(hostname)/api;
yarn install;
pm2 start bin/www;

# app
cd /www/$(hostname)/app;
yarn install;
pm2 start build/server.js;

# deploy
cd /www/$(hostname);
pm2 start _deploy.js;

# upload to CDN
#cd app; node _cdn.js; #this should be done by "npm run build"