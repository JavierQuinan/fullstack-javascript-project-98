install:
     npm ci

Brian-games:
     node bin/Brain-games.js

brian-even:
     node bin/brian-even.js

brain-calc:
     node bin/brain-calc.js

brain-gcd:
     node bin/brain-gcd.js

brain-progression:
     node bin/brain-progression.js

brain-prime:
     node bin/brain-prime.js

publish:
     npm publish --dry-run

lint :
     npx eslint .
