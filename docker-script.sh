#!/bin/bash

node index.js &
prism mock https://raw.githubusercontent.com/team-telnyx/openapi/master/openapi/spec3.json
