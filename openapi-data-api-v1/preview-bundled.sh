cd "$(dirname "$0")"

BUNDLED_OPENAPI_FILE="../openapi-data-api-v1.bundled.yaml"

npx @redocly/cli@latest preview-docs "$BUNDLED_OPENAPI_FILE"
