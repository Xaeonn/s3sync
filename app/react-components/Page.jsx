var React = require('react');
var ReactDOM = require('react-dom');
require('./NavBar');
BucketList = require('./BucketList');

var links = [{pageId:"buckets",text:"Buckets"},{pageId:"sync_folders",text:"Syncing Folders"}];


var Page = React.createClass({
  render: function() {
    return <div>
      <NavBar links={links}/>
      <BucketList buckets={s3Client.buckets} />
    </div>;
  }
});

module.exports = Page;
