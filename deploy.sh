cd ci-cd
git pull origin main
/home/ubuntu/.nvm/versions/node/v22.14.0/bin/npm install
/home/ubuntu/.nvm/versions/node/v22.14.0/bin/npm run build
/home/ubuntu/.nvm/versions/node/v22.14.0/bin/npm run start