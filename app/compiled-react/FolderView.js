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
        { href: '#', onClick: () => this.props.pageManager.openFile(this.props.bucket, item.name) },
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
        this.props.folderName
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

// Taken from example at
// http://stackoverflow.com/questions/29902347/open-a-file-with-default-program-in-node-webkit

// function getCommandLine() {
//    switch (process.platform) {
//       case 'darwin' : return 'open';
//       case 'win32' : return 'start';
//       case 'win64' : return 'start';
//       default : return 'xdg-open';
//    }
// }

// second , execute the command line followed by the path

// var sys = require('sys');
// var exec = require('child_process').exec;
//
// exec(getCommandLine() + ' ' + filePath);