// File system
fs = require('fs');
// S3 client
var S3Client = require('./aws/s3client/s3client');
s3Client = new S3Client('eu-west-1');
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

SyncDir = require('./syncdir/syncdir');
// syncDir = new SyncDir('/Users/samboles/syncfile',
//                       s3Client, 'general-crap', 'tets');

require('./scripts/syncdir_preventdefault');
