sudo certbot renew
service nginx restart

# server {
#         server_name default;
#         listen 80;
#         listen [::]:80;
#         listen 443 ssl http2;
#         listen [::]:443 ssl http2 ipv6only=on;
#         ssl_certificate /etc/letsencrypt/live/jobs.paulshorey.com/fullchain.pem;
#         ssl_certificate_key /etc/letsencrypt/live/jobs.paulshorey.com/privkey.pem;
#         ssl_trusted_certificate /etc/letsencrypt/live/jobs.paulshorey.com/fullchain.pem;
#         include /etc/nginx/snippets/ssl.conf;

#     location / {
#             proxy_set_header   X-Forwarded-For $remote_addr;
#             proxy_set_header   Host $http_host;
#             proxy_pass         "http://localhost:3000";
#     }

#     location /static {
#             root /www/ps-jobs/;
#             try_files $uri /;
#     }

#     location ~ /\.well-known/acme-challenge {
#             default_type "text/plain";
#             root /www/sslcert;
#             try_files /$uri /;
#     }

# }