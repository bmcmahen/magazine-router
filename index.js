var Router = require('router');

/**
 * Super simple router for Magazine.js.
 * @param  {Magazine} magazine
 * @param  {Object} options
 */

module.exports = function(magazine, options){
  options = options || {};
  var root = options.root || '/';

  var router = new Router()
    .on(root + ':index', show)
    .start();

  var show = function(context, next){
    var i = context.params.index;
    magazine.show(i);
    next();
  };

  magazine.on('show', function(i){
    router.replace(root + i);
  });

}

module.exports = MagazineRouter;