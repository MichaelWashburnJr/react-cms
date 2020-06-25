FROM nginx
RUN rm -f /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/nginx.conf
RUN mkdir -p /var/www/ghost-uploads/images
RUN chown -R www-data:www-data /var/www/ghost-uploads
