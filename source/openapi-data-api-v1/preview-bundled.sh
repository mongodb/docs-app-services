cd "$(dirname "$0")"

BUNDLED_OPENAPI_FILE="./bundled.yaml"

npx @redocly/cli@latest preview-docs "$BUNDLED_OPENAPI_FILE"
