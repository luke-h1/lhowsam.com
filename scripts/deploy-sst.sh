#!/bin/bash

# ensure the following vars are set for SST. CLOUDFLARE_API_TOKEN, CLOUDFLARE_DEFAULT_ACCOUNT_ID, CLOUDFLARE_ZONE_ID

pnpx sst deploy --stage staging
