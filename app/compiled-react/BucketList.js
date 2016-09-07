var React = require('react');
var ReactDOM = require('react-dom');

BucketList = React.createClass({
  displayName: 'BucketList',

  populateList: function (bucket) {
    return React.createElement(
      'li',
      { key: bucket, className: 'list-group-item' },
      React.createElement(
        'a',
        { href: '#', onClick: () => this.props.pageHandler.loadPage('bucket', bucket) },
        bucket
      )
    );
  },
  render: function () {
    return React.createElement(
      'div',
      { className: 'container-fluid' },
      React.createElement(
        'h2',
        null,
        'Buckets'
      ),
      React.createElement(
        'ul',
        { className: 'list-group' },
        this.props.buckets.map(this.populateList)
      )
    );
  }
});

module.exports = BucketList;