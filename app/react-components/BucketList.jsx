var React = require('react');
var ReactDOM = require('react-dom');

BucketList = React.createClass({
  populateList: function(bucket){
    return <li key={bucket} className="list-group-item">
        <a href="#" onClick={()=>this.props.pageManager.loadPage('bucket',{bucket:bucket,folderPrefix:''})}>
          {bucket}
        </a>
      </li>;
  },
  render: function() {
    return <div className="container-fluid"><h2>Buckets</h2><ul className="list-group">
      {this.props.buckets.map(this.populateList)}
    </ul></div>;
  }
});

module.exports = BucketList;
