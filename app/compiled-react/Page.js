var React = require('react');
var ReactDOM = require('react-dom');
require('./NavBar');

var Page = React.createClass({
  displayName: 'Page',

  render: function () {
    return React.createElement(
      'div',
      null,
      React.createElement(NavBar, { links: this.props.links, pageHandler: this.props.pageHandler }),
      this.props.children
    );
  }
});

module.exports = Page;