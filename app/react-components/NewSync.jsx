var React = require('react');
var ReactDOM = require('react-dom');

NewSync = React.createClass({
  render: function() {
    return <form>

      <div className="form-group">
        <label for="directory">Sync Directory</label>
        <input type="text" className="form-control" id="directory" placeholder="Sync Directory"/>
      </div>

      <div className="form-group">
        <label for="bucket">Bucket Name</label>
        <input type="text" className="form-control" id="bucket" placeholder="Bucket Name"/>
      </div>

      <div className="form-group">
        <label for="prefix">Prefix Text</label>
        <input type="text" className="form-control" id="prefix" placeholder="Prefix text"/>
      </div>

      <div className="checkbox">
        <label>
          <input type="checkbox"/> Static Site
        </label>
      </div>

      <button type="submit" className="btn btn-default">Submit</button>
    </form>;
  }
});

module.exports = NewSync;
