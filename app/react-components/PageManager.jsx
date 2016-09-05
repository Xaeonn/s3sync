var React = require('react');
var ReactDOM = require('react-dom');
require('./NavBar');
Page = require('./Page');


PageManager = function(){
  // this.Components = ComponentTypes;
  // this.Pages = {};
  this.NavLinks = [{pageId:"buckets",text:"Buckets"},{pageId:"sync_folders",text:"Syncing Folders"}];
  // this.GlobalModals = {};
  // this.SearchResultItems  = [];
}

PageManager.prototype.render = function () {
  ReactDOM.render(
    <Page/>,
    document.getElementById('container')
  );
};

module.exports = PageManager;
