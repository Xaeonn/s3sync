// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
var remote = require('electron').remote;

// Use full screen
window.resizeTo(screen.availWidth,screen.availHeight);
// Setting up shortcuts here (may be worth moving to an external shortcuts js file)
const {app, globalShortcut} = remote.require('electron');

// Search
register_find = globalShortcut.register('CmdOrCtrl+f', function(){
  $('#searchModal').modal('show');
});

//
