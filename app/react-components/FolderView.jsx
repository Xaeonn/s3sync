var React = require('react');
var ReactDOM = require('react-dom');

FolderView = React.createClass({
  populateList: function(item){
    return <li key={item.name} className="list-group-item">
        <a href="#" onClick={()=>this.props.pageManager.openFile(this.props.bucket,this.props.path,item.name)}>
          {item.name}
        </a>
      </li>;
  },
  render: function() {
    return <div className="container-fluid"><h2>{this.props.path}</h2><ul className="list-group">
      {this.props.folderItems.map(this.populateList)}
    </ul></div>;
  }
});

module.exports = FolderView;
