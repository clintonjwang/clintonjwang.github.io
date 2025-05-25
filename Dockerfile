# Use the official Jekyll image
FROM jekyll/jekyll:4.2.2

# Set the working directory
WORKDIR /srv/jekyll

# Copy the site files
COPY . .

# Install dependencies
RUN bundle install

# Expose port 4000
EXPOSE 4000

# Command to serve the Jekyll site
CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0", "--watch", "--force_polling"]

