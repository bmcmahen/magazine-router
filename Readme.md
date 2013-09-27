
# magazine-router

  a clientside router plugin for magazine.js

## Installation

  Install with [component(1)](http://component.io):

    $ component install bmcmahen/magazine-router

## API

```javascript
var magazineRouter = require('magazine-router');
magazine.use(magazineRouter, { root : '/url/root/' });
```

Note: You'll need to redirect all of your server-side routes within the magazine path to the magazine root for external links to work.


## License

  MIT
