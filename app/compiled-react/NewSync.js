var React = require('react');
var ReactDOM = require('react-dom');

NewSync = React.createClass({
  displayName: 'NewSync',

  submit: function () {
    var directory = $('#directory').val();
    var bucket = $('#bucket').val();
    var prefix = $('#prefix').val();
    this.props.createSync(directory, bucket, prefix);
  },
  render: function () {
    return React.createElement(
      'div',
      { className: 'container-fluid' },
      React.createElement(
        'form',
        { action: '#' },
        React.createElement(
          'div',
          { className: 'form-group' },
          React.createElement(
            'label',
            { htmlFor: 'directory' },
            'Sync Directory'
          ),
          React.createElement('input', { type: 'text', className: 'form-control', id: 'directory', name: 'directory', placeholder: 'Sync Directory' })
        ),
        React.createElement(
          'div',
          { className: 'form-group' },
          React.createElement(
            'label',
            { htmlFor: 'bucket' },
            'Bucket Name'
          ),
          React.createElement('input', { type: 'text', className: 'form-control', id: 'bucket', name: 'bucket', placeholder: 'Bucket Name' })
        ),
        React.createElement(
          'div',
          { className: 'form-group' },
          React.createElement(
            'label',
            { htmlFor: 'prefix' },
            'Prefix Text'
          ),
          React.createElement('input', { type: 'text', className: 'form-control', id: 'prefix', name: 'prefix', placeholder: 'Prefix text' })
        )
      ),
      React.createElement(
        'button',
        { className: 'btn btn-default', onClick: () => this.submit() },
        'Button'
      )
    );
  }
});

module.exports = NewSync;