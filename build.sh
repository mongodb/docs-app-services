curl https://raw.githubusercontent.com/mongodb/docs-worker-pool/netlify-poc/scripts/build-site.sh -o build-site.sh 
sh build-site.sh


# if [ ! -d "docs-worker-pool" ]; then
  git clone --depth 1 --filter=tree:0 https://github.com/mongodb/docs-worker-pool.git --sparse
  cd docs-worker-pool && git sparse-checkout set --no-cone modules/oas-page-builder
  cd modules/oas-page-builder && npm ci && npm run build
#fi 
