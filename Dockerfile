FROM nginx:alpine

# Copy portfolio files to nginx public directory
COPY . /usr/share/nginx/html/

# Expose port 80 (nginx default)
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
