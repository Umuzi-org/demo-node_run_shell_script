#!/bin/sh

# fist we clone a thing. I'm just going to ignore it though because just realised the bloody js simple calc isn't complete enoug to run
git clone git@github.com:Umuzi-org/automark-project-config.git gitignore/automark-project-config

# echo "==========="
# echo $PROJECT_PATH
# echo "==========="

cd $PROJECT_PATH

npm test  # run the recruit's tests. They should have updated their package.json so that this works

# then copy in tests from elsewhere and run tests again




