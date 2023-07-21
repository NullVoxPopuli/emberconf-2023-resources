#!/bin/bash


rm -rf docs

cd resources \
&& npm install \
&& npm exec slidev -- build \
  --out="../docs/"
