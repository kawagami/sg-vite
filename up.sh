#!/bin/bash

docker run --rm -it -v $(pwd):/app -w /app -p 5173:5173 -u $(id -u):$(id -g) node:16 npm run dev -- --host
