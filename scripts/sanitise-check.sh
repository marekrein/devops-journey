#!/usr/bin/env bash
# Fails if published content contains identifiers that belong only in the private evidence files.
# Add your own real values to .sanitise-deny (one regex per line, file is gitignored and not used in CI);
# the patterns below catch the common shapes for everyone.
set -euo pipefail
cd "$(dirname "$0")/.."
patterns=(
  '\b[0-9]{12}\b'                                  # AWS account IDs
  'o-[a-z0-9]{10,32}\b'                            # organization IDs
  'ou-[a-z0-9]{4,32}-[a-z0-9]{8,32}\b'             # OU IDs
  'arn:aws:[a-z0-9-]+:[a-z0-9-]*:[0-9]{12}:'       # ARNs with a real account
  '\b(10|192\.168|172\.(1[6-9]|2[0-9]|3[01]))\.[0-9]+\.[0-9]+'  # private IPv4
  'AKIA[0-9A-Z]{16}'                               # access key IDs
)
allow='111111111111|222222222222|333333333333|111122223333|123456789012'   # documentation example IDs
[[ -f .sanitise-deny ]] && while IFS= read -r l; do [[ -n "$l" && "$l" != \#* ]] && patterns+=("$l"); done < .sanitise-deny
fail=0
for p in "${patterns[@]}"; do
  if hits=$(grep -rnEI --include='*.md' --include='*.mdx' "$p" src/content | grep -vE "$allow"); then
    echo "Possible private identifier ($p):"; echo "$hits"; fail=1
  fi
done
[[ $fail -eq 0 ]] && echo "sanitise-check: clean"
exit $fail
