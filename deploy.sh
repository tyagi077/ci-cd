#!/bin/bash

# Ensure nvm is available for non-interactive shell
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This makes nvm work

# Use nvm to load the right Node.js version
nvm use node

cd ci-cd
npm install
npm run build
npm run start
