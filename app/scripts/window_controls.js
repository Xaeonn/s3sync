var remote = require('electron').remote;
window.$ = window.jQuery = require('../../vendor/jquery/jquery-2.2.4.js');



$(document).ready(function(){
  // Close
  $("#closeButton").click(function(){
    remote.getCurrentWindow().close();
  });
  // Minimize
  $("#minButton").click(function(){
    if (remote.process.platform !== 'darwin'){
      remote.getCurrentWindow().minimize();
    } else {
      if (remote.getCurrentWindow().isFullScreen()){
        remote.getCurrentWindow().setFullScreen(false);
      } else {
        remote.getCurrentWindow().minimize();
      }
    }
  });
  // Maximize/Fullscreen
  $("#maxButton").click(function(){
    if (remote.process.platform !== 'darwin'){
      remote.getCurrentWindow().maximize();
    } else {
      if (remote.getCurrentWindow().isFullScreen()){
        remote.getCurrentWindow().setFullScreen(false);
      } else {
        remote.getCurrentWindow().setFullScreen(true);
      }
    }
  });
});
