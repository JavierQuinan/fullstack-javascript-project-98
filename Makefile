install:
     npm ci

Brian-games:
     node bin/Brain-games.js

publish:
     npm publish --dry-run

lint :
     npx eslint .
