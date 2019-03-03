Setting up continuous deployment using:
- Git - for version control
- Node.js - for application code
- Mocha - unit testing
- Travis CI - for continuous integration
- GitHub webhooks - for for continuous delivery/deployment
- Digital Ocean Droplet - deployment target hosting provider

## Set up Digital Ocean Ubuntu Droplet to run Node.js applications
The following instructions are compiled from:
- https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-18-04

First log in to remote droplet via SSH, then...

## UFW - ubuntu wirewall

Enable common network apps so they gets through the firewall
`sudo ufw allow http`
`sudo ufw allow https`
`sudo ufw allow OpenSSH`
`sudo ufw allow 'NGINX HTTP`
`sudo ufw allow 'NGINX HTTPS`

Turn on the firewall... turning it off is `disable` as you'd expect
`sudo ufw enable`

list the status of firewall
`sudo ufw status`

List all apps the firewall knows about
`sudo ufw app list`

## NODE
The following instructions are compiled from:
- https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-18-04

General purpose Javascript programming environment for server and client-side applications.

Install nodejs and npm using the APT package manager
`sudo apt-get update` - get latest package list
`sudo apt-get install nodejs`
`sudo apt-get install npm`

Check the version of node and npm
`npm -v`
`node -v`

## NGINX
The following instructions are compiled from:
- https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-18-04

Web server and reverse proxy.

Install nginx using the APT package manager
`sudo apt update` - get latest package list
`sudo apt install nginx`

Check whether nginx is running
`systemctl status nginx`

It should be started by default, but if it's not, do the following... to stop or restart, replace `start` with `stop` or `restart`, respectively
`sudo systemctl start nginx`

Find the IP address of the local machine
`ip addr show eth0 | grep inet | awk '{ print $2; }' | sed 's/\/.*$//'`

Try connecting to the nginx server from a web browser using the http protocol and the IP adress resulting from the above command.

# Continuous deployment for a Node.js app on Digital Ocean

## Set up a deploy account
The following instructions are taken, in part, from:
- https://hackernoon.com/continuous-deployment-for-node-js-on-digitalocean-d800e8520ffe

This account will be used for deployment, and will not have admin privileges
`sudo adduser deploy`
`usermod -aG sudo deploy` - give some root-level access to this account

## Set up SSH key from Droplet to GitHub
Following instructions here:
- https://www.digitalocean.com/docs/droplets/how-to/add-ssh-keys/create-with-openssh/

## Set up GitHub webhook
The following instructions are taken, in part, from:
- https://www.digitalocean.com/community/tutorials/how-to-use-node-js-and-github-webhooks-to-keep-remote-projects-in-sync

In GitHub repository settings, add webhook
- set it up as JSON sent to a URL on your Droplet on port 8080, and a secret passkey

On your Droplet...

Clone the GitHub repository into a directory in the droplet account home dir

Create a new 'webhooks' directory in the Droplet also within the droplet accoun home dir (but outside the clone dir)

Put the following into a file called 'webhook.js' in this webhooks directory
```
var secret = "your_webhook_secret_here"; //secret from GitHub webhook
var repo = "~/your_repo_dir_name"; //path to the clone repo on the Droplet

let http = require('http');
let crypto = require('crypto');

const exec = require('child_process').exec;

http.createServer(function (req, res) {
   req.on('data', function(chunk) {
       let sig = "sha1=" + crypto.createHmac('sha1', secret).update(chunk.toString()).digest('hex');

       if (req.headers['x-hub-signature'] == sig) {
           exec('cd ' + repo + ' && git pull');
       }
   });

   res.end();
}).listen(8080);
```

Allow traffic on this port
`sudo ufw allow 8080/tcp`

Test it out
`cd ~/webhooks`
`node webhook.js`

Check out the GitHub repo's settings for this webhook
- the Recent Deliveries section should show a log of the connection

Now make your node webhook app always run as a background process.

Add a system service:
`sudo emacs /etc/systemd/system/webhook.service`

Enter this into that webhook.service file:
```
[Unit]
Description=Github webhook
After=network.target

[Service]
Environment=NODE_PORT=8080
Type=simple
User=deploy
ExecStart=/usr/bin/node /home/deploy/webhooks/webhook.js
Restart=on-failure

[Install]
WantedBy=multi-user.target
```

Enable the new service so it starts when the system boots:
`sudo systemctl enable webhook.service`

Now start the service:
`sudo systemctl start webhook`

Ensure the service is started:
`sudo systemctl status webhook`

Note that this does not yet deploy the code, but has rather delivered it....  deployment is a small extra step to restart the deployed node app from the webhook script, using `npm restart` or some such thing.

