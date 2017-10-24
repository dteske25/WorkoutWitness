#!/bin/bash

printf "\n\n Restoring \n\n"

dotnet restore
cd WorkoutWitness.Web

npm install
npm rebuild node-sass

printf "\n\n Building \n\n"
dotnet build -c Release


printf "\n\n Running Webpack \n\n"
node node_modules/webpack/bin/webpack.js --config webpack.config.vendor.js --env.prod
node node_modules/webpack/bin/webpack.js --env.prod