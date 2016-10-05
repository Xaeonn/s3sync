var React = require('react');
var ReactDOM = require('react-dom');

FolderView = React.createClass({
  displayName: 'FolderView',

  populateList: function (item) {
    return React.createElement(
      'li',
      { key: item.name, className: 'list-group-item' },
      React.createElement(
        'a',
        { href: '#', onClick: () => this.props.pageManager.openFile(this.props.bucket, this.props.path, item.name) },
        item.name
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
        this.props.path
      ),
      React.createElement(
        'ul',
        { className: 'list-group' },
        this.props.folderItems.map(this.populateList)
      )
    );
  }
});

module.exports = FolderView;