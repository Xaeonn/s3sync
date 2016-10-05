var React = require('react');
var ReactDOM = require('react-dom');
// Components
Page = require('./Page');
BucketList = require('./BucketList');
FolderView = require('./FolderView');

// Constants
const links = [{pageId:"buckets",text:"Buckets"},
  {pageId:"files",text:"Local Files"},
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
    case "files":
      if (typeof data == 'undefined'){
        this.listFiles({path:"."});
      } else{
        this.listFiles({path:data.path});
      }
      break;
    default:
      this.render();
  }
}

// List the contents of a bucket
PageManager.prototype.listFiles = function (data) {
  pm = this;
  fs.readdir(data.path, function (err, files) {
    var items = [];
    for (var k in files) {
      items.push({name:files[k]});
    }
    ReactDOM.render(
      <Page links={pm.NavLinks} pageManager={pm}>
        <FolderView folderItems={items} bucket={"Local files"} path={data.path} pageManager={pm}/>
      </Page>,
      document.getElementById('container')
    );
  });
};

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
        <FolderView folderItems={items} bucket={data.bucket} path={data.folderPrefix} pageManager={pm}/>
      </Page>,
      document.getElementById('container')
    );
  });
};

PageManager.prototype.openFile = function (bucket, path, item) {
  var pm = this;
  fullpath = path+'/'+item;
  console.log(path);
  if (bucket == "Local files") {
    fs.stat(fullpath, function(err, stats){
      if (stats.isFile()) {
        pm.openExtFile(fullpath);
      }
      if (stats.isDirectory()) {
        pm.loadPage("files",{path:fullpath});
      }
    });
  }
};

PageManager.prototype.openExtFile = function(fullpath) {
  // Taken from example at
  // http://stackoverflow.com/questions/29902347/open-a-file-with-default-program-in-node-webkit
  var starter;
  switch (process.platform) {
    case 'darwin' : starter = 'open';
    case 'win32' : starter =  'start';
    case 'win64' : starter =  'start';
    default : starter =  'xdg-open';
  }

  // second , execute the command line followed by the path

  // var sys = require('sys');
  var exec = require('child_process').exec;

  exec(starter + ' ' + fullpath);
  console.log("something")
}

module.exports = PageManager;
