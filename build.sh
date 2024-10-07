curl https://raw.githubusercontent.com/mongodb/docs-worker-pool/netlify-poc/scripts/build-site.sh -o build-site.sh 
sh build-site.sh


if [ ! -d "docs-worker-pool" ]; then
  git clone --depth 1 --filter=tree:0 https://github.com/mongodb/docs-worker-pool.git --sparse
  cd docs-worker-pool && git sparse-checkout set --no-cone modules/oas-page-builder
  cd modules/oas-page-builder && npm ci && npm run build
fi 

git clone -b @dop/redoc-cli@1.2.3 --depth 1 https://github.com/mongodb-forks/redoc.git redoc
cd redoc && npm ci --prefix cli/ --omit=dev

node docs-worker-pool/modules/oas-page-builder --bundle bundle.zip --output snooty/public --redoc ${REDOC_PATH} --repo ${REPO_DIR} --site-url ${SITE_URL}
