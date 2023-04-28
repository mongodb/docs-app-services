cd "$(dirname "$0")"

SOURCE_OPENAPI_FILE="./openapi.yaml"

npx @redocly/cli@latest preview-docs "$SOURCE_OPENAPI_FILE"
