/**
 * Compat for changes from node 0.4.x to 0.6.x.
 */
try {
  module.exports = require('../build/Release/canvas.osx');
} catch (e) { try {
  module.exports = require('../build/Release/canvas');
} catch (e) {
  throw e;
}}
