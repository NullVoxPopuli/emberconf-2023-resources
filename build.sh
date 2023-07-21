#!/bin/bash


rm -rf docs

cd resources \
&& npm install \
&& npm exec slidev -- build \
  --base="/emberconf-2023-resources/" \
  --out="../docs/"
