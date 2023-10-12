#!/bin/bash

NAME="sg-vite"

# docker run --rm -it -v $(pwd):/app -w /app -u $(id -u):$(id -g) node:16 $@
docker exec -it -u $(id -u):$(id -g) $NAME $@
