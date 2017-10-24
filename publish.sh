#!/bin/bash

git reset --hard HEAD
git checkout master
git pull

sudo service workout-witness stop

dotnet publish WorkoutWitness.Web -c Release -o /var/workoutWitness

sudo service workout-witness start

sudo service workout-witness status
