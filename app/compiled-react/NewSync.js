var React = require('react');
var ReactDOM = require('react-dom');

NewSync = React.createClass({
  displayName: 'NewSync',

  submit: function () {
    var directory = $('#directory').val();
    var bucket = $('#bucket').val();
    var prefix = $('#prefix').val();
    this.props.syncDirManager.createSync(directory, bucket, prefix);
  },
  render: function () {
    return React.createElement(
      'div',
      { className: 'container-fluid' },
      React.createElement(
        'form',
        null,
        React.createElement(
          'div',
          { className: 'form-group' },
          React.createElement(
            'label',
            { htmlFor: 'directory' },
            'Sync Directory'
          ),
          React.createElement('input', { type: 'text', className: 'form-control', id: 'directory', placeholder: 'Sync Directory' })
        ),
        React.createElement(
          'div',
          { className: 'form-group' },
          React.createElement(
            'label',
            { htmlFor: 'bucket' },
            'Bucket Name'
          ),
          React.createElement('input', { type: 'text', className: 'form-control', id: 'bucket', placeholder: 'Bucket Name' })
        ),
        React.createElement(
          'div',
          { className: 'form-group' },
          React.createElement(
            'label',
            { htmlFor: 'prefix' },
            'Prefix Text'
          ),
          React.createElement('input', { type: 'text', className: 'form-control', id: 'prefix', placeholder: 'Prefix text' })
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