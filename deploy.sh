#!/bin/bash

# Ensure nvm is available for non-interactive shell
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This makes nvm work


nvm use node

cd ci-cd
npm install
npm run build
npm run start
