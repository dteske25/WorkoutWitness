#!/bin/bash

dotnet restore

cd WorkoutWitness.Web
cd ClientApp
npm install
cd ..
dotnet build

sudo service workout-witness stop

sudo dotnet publish WorkoutWitness.Web -c Release -o /var/aspnetcore/workout-witness

sudo service workout-witness start

sudo service workout-witness status
