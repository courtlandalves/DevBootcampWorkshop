# Sends a raw the contents of request.http as a raw request
cat request.http | nc -v www.google.com 80

# This creates a simple web server that always returns the contents of response.http
while true; do nc -l localhost 8888 -q 1 < response.http ; done

# This will listen to all TCP requests
sudo tcpdump -i 7  -A 'tcp port 8888'
