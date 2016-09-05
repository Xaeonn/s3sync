var React = require('react');
var ReactDOM = require('react-dom');
require('./NavBar');
BucketList = require('./BucketList');

var links = [{ pageId: "buckets", text: "Buckets" }, { pageId: "sync_folders", text: "Syncing Folders" }];

var Page = React.createClass({
  displayName: 'Page',

  render: function () {
    return React.createElement(
      'div',
      null,
      React.createElement(NavBar, { links: links }),
      React.createElement(BucketList, { buckets: s3Client.buckets })
    );
  }
});

module.exports = Page;