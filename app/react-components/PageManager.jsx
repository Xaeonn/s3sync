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
    <Page links={this.NavLinks} pageManager={this}>
    </Page>,
    document.getElementById('container')
  );
};

PageManager.prototype.loadPage = function (pageId, data) {
  switch (pageId) {
    case "buckets":
      this.listBuckets();
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
      this.listBucketFiles(data);
      break;
    default:
      this.render();
  }
}

// List the available buckets on the account
PageManager.prototype.listBuckets = function () {
  var pm = this;
  s3Client.getBucketList(function(buckets){
    ReactDOM.render(
      <Page links={pm.NavLinks} pageManager={pm}>
        <BucketList buckets={buckets} pageManager={pm}/>
      </Page>,
      document.getElementById('container')
    );
  });
};

// List the contents of a bucket
PageManager.prototype.listBucketFiles = function (data) {
  pm = this;
  s3Client.getObjectList(data.bucket, data.folderPrefix, function(items){
    ReactDOM.render(
      <Page links={pm.NavLinks} pageManager={pm}>
        <FolderView folderItems={items} bucket={data.bucket} folderName={data.folderPrefix} pageManager={pm}/>
      </Page>,
      document.getElementById('container')
    );
  });
};

PageManager.prototype.openFile = function (bucket, item) {
  console.log(bucket,' ', item);

};
module.exports = PageManager;
