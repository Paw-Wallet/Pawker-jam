#!/bin/sh

# Determine the platform
PLATFORM=$(uname)

COMMIT_MSG_PATH=
while getopts "m:" opt
do
   case "$opt" in
      m ) COMMIT_MSG_PATH="$OPTARG" ;;
   esac
done

TYPE="$(cat "$PWD/.husky/metadata/type.txt")"
COMMIT_MSG="$(cat "$COMMIT_MSG_PATH")"
valid_commit_regex="^($TYPE): [a-zA-Z0-9 \-]+$"

message="❌ Commit invalid, regex: $valid_commit_regex"

# Use awk to check if the commit message matches the regex
if echo "$COMMIT_MSG" | awk "/$valid_commit_regex/ { exit 0 } { exit 1 }" > /dev/null 2>&1; then
  exit 0
else
  echo "$message"
  echo "Eg: chore: refactor route"
  exit 1
fi

exit 0
