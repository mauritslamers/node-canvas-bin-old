/**
 * Compat for changes from node 0.4.x to 0.6.x.
 */

if(process.platform === 'darwin'){
  module.exports = require('../build/Release/canvas.osx');
}
if(process.platform === 'win32'){
  module.exports = require('../build/Release/canvas');
}

if(!module.exports){

  try {
    module.exports = require('../build/Release/canvas.osx');
  } 
  catch (e) { 
    try {
      module.exports = require('../build/Release/canvas');
    } catch (e) {
      throw e;
    }
  }
}
