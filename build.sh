#!/bin/bash

printf "\n\n Restoring \n\n"

dotnet restore
cd WorkoutWitness.Web

ls

npm install
npm rebuild node-sass

printf "\n\n Building \n\n"
dotnet build -c Release

printf "\n\n Zipping UI \n\n"
ls

cd wwwroot/dist

ls

zip -r latest .
cd ../../..
mkdir -p release
mv WorkoutWitness.Web/wwwroot/dist/latest.zip release/latest.zip