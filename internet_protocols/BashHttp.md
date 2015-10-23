# This will show you your IP address
ifconfig

# This will look up the DNS entries for a domain
nslookup google.com

# This is how you can find the path to the server
traceroute www.google.com

# This will listen to all TCP requests
sudo tcpdump -i 7  -A 'tcp port 8888'

# Sends a raw the contents of request.http as a raw request
cat request.http | nc -v www.google.com 80

# This creates a simple web server that always returns the contents of response.http
while true; do nc -l localhost 8888 -q 1 < response.http ; done

# This is how can can md5 a string or a file
md5 "string"
md5 < filename


