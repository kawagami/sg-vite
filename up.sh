#!/bin/bash

NAME="sg-vite"

code .
docker run \
    --rm \
    --name $NAME \
    -it \
    -v $(pwd):/app \
    -w /app \
    -p 5173:5173 \
    -u $(id -u):$(id -g) \
    node:16-slim \
    npm run dev -- --host
