var React = require('react');
var ReactDOM = require('react-dom');

var SyncList = React.createClass({
  populateSyncDirectories: function(sync) {
    return <tr key={sync.id}>
        <td>{sync.directory}</td>
        <td>{sync.bucket}</td>
        <td>{sync.prefix}</td>
        <td>
          <span className="glyphicon glyphicon-refresh" aria-hidden="true"
            onClick={()=>this.props.syncDirManager.runSync(sync.id)}>
          </span>
        </td>
      </tr>;
  },
  render: function() {
    return <div className="container-fluid">
      <table className="table">
        <caption>Sync Directories</caption>
        <thead>
          <tr>
            <th>Directory</th>
            <th>Bucket</th>
            <th>Prefix</th>
            <th>Sync</th>
          </tr>
        </thead>
        <tbody>
          {this.props.syncs.map(this.populateSyncDirectories)}
        </tbody>
      </table>
    </div>;
  }
});

module.exports = SyncList;
