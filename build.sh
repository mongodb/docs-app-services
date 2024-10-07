curl https://raw.githubusercontent.com/mongodb/docs-worker-pool/netlify-poc/scripts/build-site.sh -o build-site.sh 
sh build-site.sh


git clone --depth 1 --filter=tree:0 https://github.com/mongodb/docs-worker-pool.git --sparse
