var React = require('react');
var ReactDOM = require('react-dom');

var SyncList = React.createClass({
  displayName: 'SyncList',

  populateSyncDirectories: function (sync) {
    return React.createElement(
      'tr',
      { key: sync.id },
      React.createElement(
        'td',
        null,
        sync.directory
      ),
      React.createElement(
        'td',
        null,
        sync.bucket
      ),
      React.createElement(
        'td',
        null,
        sync.prefix
      ),
      React.createElement(
        'td',
        null,
        React.createElement('span', { className: 'glyphicon glyphicon-refresh', 'aria-hidden': 'true',
          onClick: () => this.sync() })
      )
    );
  },
  render: function () {
    return React.createElement(
      'div',
      { className: 'container-fluid' },
      React.createElement(
        'table',
        { className: 'table' },
        React.createElement(
          'caption',
          null,
          'Sync Directories'
        ),
        React.createElement(
          'thead',
          null,
          React.createElement(
            'tr',
            null,
            React.createElement(
              'th',
              null,
              'Directory'
            ),
            React.createElement(
              'th',
              null,
              'Bucket'
            ),
            React.createElement(
              'th',
              null,
              'Prefix'
            ),
            React.createElement(
              'th',
              null,
              'Sync'
            )
          )
        ),
        React.createElement(
          'tbody',
          null,
          this.props.syncs.map(this.populateSyncDirectories)
        )
      )
    );
  }
});

module.exports = SyncList;