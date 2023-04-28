cd "$(dirname "$0")"

SOURCE_OPENAPI_FILE="./openapi.yaml"
BUNDLED_OPENAPI_FILE="./bundled.yaml"

npx @redocly/cli@latest bundle $SOURCE_OPENAPI_FILE --output $BUNDLED_OPENAPI_FILE
