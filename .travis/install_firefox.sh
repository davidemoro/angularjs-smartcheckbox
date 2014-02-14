#!/bin/sh

# https://github.com/travis-ci/travis-ci/issues/938#issuecomment-16336150
# fix permission
sudo apt-get update
sudo apt-get install firefox --fix-missing
