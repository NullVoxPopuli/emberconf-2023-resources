#!/bin/bash
#
npm install
npm run build 
mv dist ../
mv ../dist ../docs
