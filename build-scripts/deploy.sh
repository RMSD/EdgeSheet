git init
git config user.name "Travis-CI"
git config user.email "travis@CI.com"
npm run deploy
git add -A
git push --force --quiet "https://${GITHUB_TOKEN}@github.com/RMSD/EdgeSheet.git" master:gh-pages > /dev/null 2>&1
