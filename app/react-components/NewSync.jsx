var React = require('react');
var ReactDOM = require('react-dom');

NewSync = React.createClass({
  submit: function() {
    var directory = $('#directory').val();
    var bucket = $('#bucket').val();
    var prefix = $('#prefix').val();
    this.props.syncDirManager.createSync(directory, bucket, prefix);
  },
  render: function() {
    return <div className="container-fluid">
      <form>
        <div className="form-group">
          <label htmlFor="directory">Sync Directory</label>
          <input type="text" className="form-control" id="directory" placeholder="Sync Directory"/>
        </div>

        <div className="form-group">
          <label htmlFor="bucket">Bucket Name</label>
          <input type="text" className="form-control" id="bucket" placeholder="Bucket Name"/>
        </div>

        <div className="form-group">
          <label htmlFor="prefix">Prefix Text</label>
          <input type="text" className="form-control" id="prefix" placeholder="Prefix text"/>
        </div>
      </form>
      <button className="btn btn-default" onClick={()=>this.submit()}>Button</button>
    </div>;
  }
});

module.exports = NewSync;
