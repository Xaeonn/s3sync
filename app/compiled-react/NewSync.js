var React = require('react');
var ReactDOM = require('react-dom');

NewSync = React.createClass({
  displayName: 'NewSync',

  render: function () {
    return React.createElement(
      'form',
      null,
      React.createElement(
        'div',
        { className: 'form-group' },
        React.createElement(
          'label',
          { 'for': 'directory' },
          'Sync Directory'
        ),
        React.createElement('input', { type: 'text', className: 'form-control', id: 'directory', placeholder: 'Sync Directory' })
      ),
      React.createElement(
        'div',
        { className: 'form-group' },
        React.createElement(
          'label',
          { 'for': 'bucket' },
          'Bucket Name'
        ),
        React.createElement('input', { type: 'text', className: 'form-control', id: 'bucket', placeholder: 'Bucket Name' })
      ),
      React.createElement(
        'div',
        { className: 'form-group' },
        React.createElement(
          'label',
          { 'for': 'prefix' },
          'Prefix Text'
        ),
        React.createElement('input', { type: 'text', className: 'form-control', id: 'prefix', placeholder: 'Prefix text' })
      ),
      React.createElement(
        'div',
        { className: 'checkbox' },
        React.createElement(
          'label',
          null,
          React.createElement('input', { type: 'checkbox' }),
          ' Static Site'
        )
      ),
      React.createElement(
        'button',
        { type: 'submit', className: 'btn btn-default' },
        'Submit'
      )
    );
  }
});

module.exports = NewSync;