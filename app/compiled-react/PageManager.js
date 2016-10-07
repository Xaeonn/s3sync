var React = require('react');
var ReactDOM = require('react-dom');
// Components
Page = require('./Page');
BucketList = require('./BucketList');
FolderView = require('./FolderView');
NewSync = require('./NewSync');

// Constants
const links = [{ pageId: "buckets", text: "Browse S3" }, { pageId: "files", text: "Browse Files" }, { pageId: "sync_folders", text: "Syncing Folders" }];

PageManager = function () {
  // this.Components = ComponentTypes;
  // this.Pages = {};
  this.NavLinks = links;
  // this.GlobalModals = {};
  // this.SearchResultItems  = [];
};

PageManager.prototype.render = function () {
  ReactDOM.render(React.createElement(Page, { links: this.NavLinks, pageManager: this }), document.getElementById('container'));
};

PageManager.prototype.loadPage = function (pageId, data) {
  switch (pageId) {
    case "buckets":
      this.listBuckets();
      break;
    case "sync_folders":
      this.loadSyncView();
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
    case "files":
      if (typeof data == 'undefined') {
        this.listFiles({ path: "." });
      } else {
        this.listFiles({ path: data.path });
      }
      break;
    default:
      this.render();
  }
};

function test(directory, bucket, prefix) {
  alert(directory + ' ' + bucket + ' ' + prefix);
  page.loadPage('files');
}
//
PageManager.prototype.loadSyncView = function () {
  ReactDOM.render(React.createElement(
    Page,
    { links: this.NavLinks, pageManager: this },
    React.createElement(NewSync, { createSync: test })
  ), document.getElementById('container'));
};

// List the contents of a bucket
PageManager.prototype.listFiles = function (data) {
  pm = this;
  fs.readdir(data.path, function (err, files) {
    var items = [];
    for (var k in files) {
      items.push({ name: files[k] });
    }
    ReactDOM.render(React.createElement(
      Page,
      { links: pm.NavLinks, pageManager: pm },
      React.createElement(FolderView, { folderItems: items, bucket: "Local files", path: data.path, pageManager: pm })
    ), document.getElementById('container'));
  });
};

// List the available buckets on the account
PageManager.prototype.listBuckets = function () {
  var pm = this;
  s3Client.ListBuckets(function (buckets) {
    bucketNames = [];
    for (k in buckets.Buckets) {
      bucketNames.push(buckets.Buckets[k].Name);
    }
    ReactDOM.render(React.createElement(
      Page,
      { links: pm.NavLinks, pageManager: pm },
      React.createElement(BucketList, { buckets: bucketNames, pageManager: pm })
    ), document.getElementById('container'));
  });
};

// List the contents of a bucket
PageManager.prototype.listBucketFiles = function (data) {
  pm = this;
  s3Client.ListDirectoryFiles(data.bucket, data.folderPrefix, function (files) {
    filenames = [];
    console.debug(files);
    for (k in files.CommonPrefixes) {
      filenames.push({ name: files.CommonPrefixes[k].Prefix });
    }
    for (k in files.Contents) {
      filenames.push({ name: files.Contents[k].Key });
    }
    ReactDOM.render(React.createElement(
      Page,
      { links: pm.NavLinks, pageManager: pm },
      React.createElement(FolderView, { folderItems: filenames, bucket: data.bucket, path: data.folderPrefix, pageManager: pm })
    ), document.getElementById('container'));
  });
};

PageManager.prototype.openFile = function (bucket, path, item) {
  var pm = this;
  fullpath = path + '/' + item;
  console.log(path);
  if (bucket == "Local files") {
    fs.stat(fullpath, function (err, stats) {
      if (stats.isDirectory()) {
        pm.loadPage("files", { path: fullpath });
      }
    });
  }
};

module.exports = PageManager;