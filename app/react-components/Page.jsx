var React = require('react');
var ReactDOM = require('react-dom');
require('./NavBar');

var Page = React.createClass({
  render: function() {
    return <div>
      <NavBar links={this.props.links} loadPage={this.props.loadPage}/>
      {this.props.children}
    </div>;
  }
});

module.exports = Page;
