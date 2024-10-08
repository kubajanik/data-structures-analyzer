#!/bin/sh
mongoimport --collection algorithms --file algorithms.json --jsonArray --uri "mongodb://mongodb:27017/main"