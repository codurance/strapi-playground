#!/usr/bin/env bash -ex

COMPOSE="docker-compose -f docker-compose.production.yaml"

$COMPOSE up -d --build --renew-anon-volumes mongo

pushd mongodump
./restore.sh
popd

$COMPOSE up -d --build

http --check-status http://localhost:8080/

$COMPOSE down
