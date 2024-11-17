#!/bin/sh

# Determine the platform
PLATFORM=$(uname)

# Get the local branch name
local_branch_name="$(git rev-parse --abbrev-ref HEAD)"

# Read metadata from the type file
TYPE="$(cat "$PWD/.husky/metadata/type.txt")"

# Define the regex for a valid branch name (simplified to (type)/message)
valid_branch_regex="^($TYPE)\/[a-zA-Z0-9\-]+$"

# Error message for invalid branch name
message="❌ Branch name invalid, regex: $valid_branch_regex"

# Use awk to check if the branch name matches the regex
if echo "$local_branch_name" | awk "/$valid_branch_regex/ { exit 0 } { exit 1 }"; then
  exit 0
else
  echo "$message"
  echo "Eg: feat/refactor-route"
  exit 1
fi

exit 0
