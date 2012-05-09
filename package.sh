#!/bin/bash

pushd plugin
VERSION=`grep 'version' manifest.json | cut -f 4 -d \"`
FILENAME="maven-search_${VERSION}.zip"

echo $FILENAME
zip ../$FILENAME -r *
popd