#!/bin/bash

RED=$(tput setaf 1)
GREEN=$(tput setaf 2)
RESET=$(tput sgr0)

COMMITS_BEHIND_MAIN=$(eval "git rev-list --left-right --count origin/main...HEAD" | cut -f1)

if [ $COMMITS_BEHIND_MAIN -gt 0 ]; then
  echo "${RED}Branch is behind main by $COMMITS_BEHIND_MAIN commits. Please rebase.${RESET}"
else
  echo "${GREEN}Branch is in-sync with main.${RESET}"
fi
