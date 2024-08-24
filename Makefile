SHELL := /bin/bash


.PHONY: help
help:
	@echo "Available targets:"
	@echo "  e2e-install-browsers  : Install browsers for End-to-End tests"
	@echo "  e2e-local-open        : Run End-to-End tests locally (headed)"
	@echo "  e2e-dev               : Run End-to-End tests on the dev environment (headless)"
	@echo "  e2e-dev-open          : Run End-to-End tests on the dev environment (headed)"
	@echo "  e2e-prod              : Run End-to-End tests on the prod environment (headless)"
	@echo "  e2e-prod-open         : Run End-to-End tests on the prod environment (headed)"


.PHONY: e2e-install-browsers
e2e-install-browsers:
	pnpm exec playwright install --with-deps chromium

.PHONY: e2e-local
e2e-local:
	BASE_URL='http://localhost:3000' ./node_modules/.bin/playwright test ${tests} --config=playwright-common.config.ts

.PHONY: e2e-local-open
e2e-local-open:
	BASE_URL='http://localhost:3000' ./node_modules/.bin/playwright test ${tests} --headed --config=playwright-common.config.ts

.PHONY: e2e-dev
e2e-dev:
	BASE_URL='https://dev.lhowsam.com' ./node_modules/.bin/playwright test ${tests} --config=playwright-dev.config.ts

.PHONY: e2e-dev-open
e2e-dev-open:
	BASE_URL='https://dev.lhowsam.com' ./node_modules/.bin/playwright test ${tests}  --headed --config=playwright-dev.config.ts

.PHONY: e2e-prod
e2e-prod:
	BASE_URL='https://lhowsam.com' ./node_modules/.bin/playwright test ${tests} --config=playwright-common.config.ts

.PHONY: e2e-prod-open
e2e-prod-open:
	BASE_URL='https://lhowsam.com' ./node_modules/.bin/playwright test ${tests} --headed  --config=playwright-common.config.ts
