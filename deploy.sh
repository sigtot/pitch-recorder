#!/bin/sh
set -e # exit on failure

git pull
rm -rf /mnt/pitch-recorder-frontend-dist/*
yes | docker-compose -f docker-compose-prod.yml rm frontend
docker-compose -f docker-compose-prod.yml build
docker-compose -f docker-compose-prod.yml up -d
