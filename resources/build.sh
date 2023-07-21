#!/bin/bash
#
npm install
npm run build -- --base /emberconf-2023-resources/
mv dist ../
mv ../dist/ ../docs
