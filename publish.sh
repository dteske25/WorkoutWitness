#!/bin/bash

dotnet restore

cd WorkoutWitness.Web
cd ClientApp
npm install
cd ..
dotnet build

sudo service workout-witness stop

dotnet publish -c Release -o /var/aspnetcore/workout-witness

sudo service workout-witness start

sudo service workout-witness status
