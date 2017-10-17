#!/bin/bash

printf "\n\nRestoring\n\n"

dotnet restore
cd WorkoutWitness.Web
mkdir dist

sudo npm install
sudo npm rebuild node-sass

printf "\n\nPublishing\n\n"
sudo dotnet publish -c Release -o ./dist

printf "\n\nZipping\n\n"
cd dist 
zip -r latest *
cd ../..
mkdir -p release
mv WorkoutWitness.Web/dist/latest.zip release/latest.zip