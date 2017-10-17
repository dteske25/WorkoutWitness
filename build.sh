#!/bin/bash

dotnet restore
cd WorkoutWitness.Web
mkdir dist

sudo npm install
sudo npm rebuild node-sass

sudo dotnet publish -c Release -o ./dist
zip -r latest ./dist
cd ..
mkdir -p release
mv WorkoutWitness.Web/latest.zip release/latest.zip
