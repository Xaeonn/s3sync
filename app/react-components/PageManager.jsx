var React = require('react');
var ReactDOM = require('react-dom');
// Components
Page = require('./Page');
BucketList = require('./BucketList');
FolderView = require('./FolderView');

// Constants
const links = [{pageId:"buckets",text:"Buckets"},
  {pageId:"sync_folders",text:"Syncing Folders"},
  {pageId:"static_sites",text:"Static Websites"},
  {pageId:"domains",text:"Domains"},
  {pageId:"blogs",text:"Blogs"},
  {pageId:"galeries",text:"Galeries"}];

PageManager = function(){
  // this.Components = ComponentTypes;
  // this.Pages = {};
  this.NavLinks = links;
  // this.GlobalModals = {};
  // this.SearchResultItems  = [];
}

PageManager.prototype.render = function () {
  ReactDOM.render(
    <Page links={this.NavLinks} pageHandler={this}>
      <BucketList buckets={s3Client.buckets} pageHandler={this}/>
    </Page>,
    document.getElementById('container')
  );
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
      this.loadBucket(data);
      break;
    default:
      console.log("Sorry, we are out of " + pageId + ".");
  }
}

PageManager.prototype.loadBucket = function (data) {
  folder = data;
  pm = this;
  s3Client.getObjectList(data, function(items){
    ReactDOM.render(
      <Page links={pm.NavLinks} loadPage={pm.loadPage}>
        <FolderView folderItems={items} folderName={folder} pageHandler={pm}/>
      </Page>,
      document.getElementById('container')
    );
  });
};

module.exports = PageManager;
