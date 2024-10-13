#!/bin/bash
# Send script output to /tmp so we can debug boot failures
exec > /tmp/userdata.log 2>&1 

# Update all packages
yum -y update

# Install Git
yum install git -y &&

# Install Node.js (v20.x) from NodeSource
curl -sL https://rpm.nodesource.com/setup_20.x | bash - &&
yum install nodejs -y &&
# Install PM2 globally and start the app
npm install -g pm2

# Create an install script and save it to /tmp
cat > /tmp/install_script.sh << 'EOF'
#!/bin/bash
# Clone the repository
git clone https://github.com/Thao-V/simple-react-node-app

# Navigate to the specific workshop1 folder
cd simple-react-node-app/workshop1/backend

# Install project dependencies
npm install
pm2 start index.js --name app
EOF

# Ensure the install script has the correct permissions
chown ec2-user:ec2-user /tmp/install_script.sh
chmod +x /tmp/install_script.sh

# Run the script as the ec2-user
sleep 1
su - ec2-user -c "/tmp/install_script.sh"
