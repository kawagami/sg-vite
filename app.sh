#!/bin/bash

docker run --rm -it -v $(pwd):/app -w /app -u $(id -u):$(id -g) node:16 $@
