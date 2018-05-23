#!/bin/bash

git reset --hard HEAD
git checkout master
git pull

sudo service workout-witness stop

sudo dotnet publish WorkoutWitness.Web -v q -c Release -o /var/aspnetcore/workout-witness

sudo service workout-witness start

sudo service workout-witness status
