var React = require('react');
var ReactDOM = require('react-dom');
// Components
Page = require('./Page');
BucketList = require('./BucketList');

// Constants
const links = [{ pageId: "buckets", text: "Buckets" }, { pageId: "sync_folders", text: "Syncing Folders" }, { pageId: "static_sites", text: "Static Websites" }, { pageId: "domains", text: "Domains" }, { pageId: "blogs", text: "Blogs" }, { pageId: "galeries", text: "Galeries" }];

PageManager = function () {
  // this.Components = ComponentTypes;
  // this.Pages = {};
  this.NavLinks = links;
  // this.GlobalModals = {};
  // this.SearchResultItems  = [];
};

PageManager.prototype.render = function () {
  ReactDOM.render(React.createElement(
    Page,
    { links: this.NavLinks, loadPage: this.loadPage },
    React.createElement(BucketList, { buckets: s3Client.buckets, loadPage: this.loadPage })
  ), document.getElementById('container'));
};

PageManager.prototype.loadPage = function (pageId, data) {
  switch (pageId) {
    case "buckets":
      console.log("buckets");
      break;
    case "sync_folders":
      console.log("sync_folders");
      break;
    case "static_sites":
      console.log("static_sites");
      break;
    case "domains":
      console.log("domains");
      break;
    case "blogs":
      console.log("blogs");
      break;
    case "galeries":
      console.log("galeries");
      break;
    case "bucket":
      console.log("Loading bucket ", data);
      break;
    default:
      console.log("Sorry, we are out of " + pageId + ".");
  }
};

module.exports = PageManager;