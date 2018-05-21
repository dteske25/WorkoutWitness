#!/bin/bash

printf "\n\n Restoring \n\n"

dotnet restore
cd WorkoutWitness.Web

npm install
npm rebuild node-sass

printf "\n\n Building \n\n"
dotnet build -c Release


printf "\n\n Running Webpack \n\n"
cd ClientApp
npm build