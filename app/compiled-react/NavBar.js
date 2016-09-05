var React = require('react');
var ReactDOM = require('react-dom');

window.NavBar = React.createClass({
  displayName: 'NavBar',

  populateNav: function (link) {
    return React.createElement(
      'li',
      { key: link.pageId },
      React.createElement(
        'a',
        { href: '#' },
        link.text
      )
    );
  },
  render: function () {
    return React.createElement(
      'nav',
      { className: 'navbar navbar-static-top navbar-inverse', id: 'titleBar' },
      React.createElement(
        'div',
        { className: 'container-fluid' },
        React.createElement(
          'div',
          { className: 'navbar-header' },
          React.createElement(
            'button',
            { type: 'button', className: 'navbar-toggle collapsed', 'data-toggle': 'collapse', 'data-target': '#bs-example-navbar-collapse-1', 'aria-expanded': 'false' },
            React.createElement(
              'span',
              { className: 'sr-only  no-drag' },
              'Toggle navigation'
            ),
            React.createElement('span', { className: 'icon-bar' }),
            React.createElement('span', { className: 'icon-bar' }),
            React.createElement('span', { className: 'icon-bar' })
          ),
          React.createElement('span', { id: 'closeButton', className: 'windowControl  no-drag' }),
          React.createElement('span', { id: 'minButton', className: 'windowControl  no-drag' }),
          React.createElement('span', { id: 'maxButton', className: 'windowControl  no-drag' })
        ),
        React.createElement(
          'div',
          { className: 'collapse navbar-collapse', id: 'bs-example-navbar-collapse-1' },
          React.createElement(
            'ul',
            { className: 'nav navbar-nav no-drag' },
            this.props.links.map(this.populateNav)
          )
        )
      )
    );
  }
});