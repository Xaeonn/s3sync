// React base component
PageManager = require('./compiled-react/PageManager');
page = new PageManager();
page.render();

// jQuery and bootstrap
window.$ = require('../vendor/jquery/jquery-2.2.4');
window.jQuery = $;
require('../vendor/bootstrap/js/bootstrap');

// Control scripts
require('./scripts/window_controls');
require('./scripts/syncdir_preventdefault');
