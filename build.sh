#!/bin/bash


( cd resources \
  && npm install \
  && npm exec slidev build --base "/emberconf-2023-resources/" \
)

rm -rf docs
mv resources/dist docs

