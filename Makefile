install:
     npm ci

Brian-games:
     node bin/Brain-games.js

brian-even:
     node bin/brian-even.js

publish:
     npm publish --dry-run

lint :
     npx eslint .
