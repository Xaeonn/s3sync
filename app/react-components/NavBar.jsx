var React = require('react');
var ReactDOM = require('react-dom');

window.NavBar = React.createClass({
  populateNav: function(link){
    return <li key={link.pageId} onClick={()=>this.props.loadPage(link.pageId)}><a href="#">{link.text}</a></li>;
  },
  render: function() {
    return <nav className="navbar navbar-static-top navbar-inverse" id="titleBar">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only  no-drag">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <span id="closeButton" className="windowControl  no-drag"></span>
          <span id="minButton" className="windowControl  no-drag"></span>
          <span id="maxButton" className="windowControl  no-drag"></span>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav no-drag">
            {this.props.links.map(this.populateNav)}
          </ul>
        </div>
      </div>
    </nav>;
  }
});
