# telnyx-prism-mock
Simple service for modifying/routing requests originally intended for telnyx-mock to be processed by prism mock server.

## Installation

#### Manual Setup
1. git clone repo
1. `cd telnyx-prism-mock/proxy`
1. `yarn install`
1. `node index.js`
1. (in separate terminal) `prism mock https://raw.githubusercontent.com/team-telnyx/openapi/master/openapi/spec3.json`

#### Docker Setup
1. `docker build -t telnyx-prism-mock .`
1. `docker run -it -p 12111:12111 telnyx-prism-mock`

## Example

```bash
curl --request GET 'http://localhost:12111/v2/balance' \
--header 'Authorization: Bearer KEY1111111111EEB0564915C5897DD580AT_49Y1hyDwPaHOLDowOJlnvw'

{"data":{"record_type":"balance","balance":"300.00","credit_limit":"100.00","available_credit":"400.00","currency":"USD"}}
```
