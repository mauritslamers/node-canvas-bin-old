/**
 * Compat for changes from node 0.4.x to 0.6.x.
 */

var os = require('os');
if(process.platform === 'darwin'){
  module.exports = require('../build/Release/canvas_osx');
}
if(process.platform === 'win32'){
  module.exports = require('../build/Release/canvas');
}
if(os.platform() === "linux" && os.arch() === "ia32") {
  module.exports = require('../build/Release/canvas_linux');
}

if(!module.exports){

  try {
    module.exports = require('../build/Release/canvas_osx');
  } 
  catch (e) { 
    try {
      module.exports = require('../build/Release/canvas');
    } catch (e) {
      throw e;
    }
  }
}
