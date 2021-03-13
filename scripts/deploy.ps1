$origin = $(git remote get-url origin)

Set-location dist

git init

Write-Output $null >> .nojekyll

git add --all

git commit -m "chore: deploy" -m "[skip ci]"

git push -f $origin HEAD:gh-pages
