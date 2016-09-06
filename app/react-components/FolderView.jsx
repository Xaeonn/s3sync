var React = require('react');
var ReactDOM = require('react-dom');

FolderView = React.createClass({
  populateList: function(bucket){
    return <li key={bucket} className="list-group-item">
        <a href="#" onClick={()=>this.props.loadPage('bucket',bucket)}>
          {bucket}
        </a>
      </li>;
  },
  render: function() {
    return <div className="container-fluid"><h2>{this.props.folderName}</h2><ul className="list-group">
      {this.props.buckets.map(this.populateList)}
    </ul></div>;
  }
});

module.exports = FolderView;

// Taken from example at
// http://stackoverflow.com/questions/29902347/open-a-file-with-default-program-in-node-webkit

// function getCommandLine() {
//    switch (process.platform) {
//       case 'darwin' : return 'open';
//       case 'win32' : return 'start';
//       case 'win64' : return 'start';
//       default : return 'xdg-open';
//    }
// }

// second , execute the command line followed by the path

// var sys = require('sys');
// var exec = require('child_process').exec;
//
// exec(getCommandLine() + ' ' + filePath);
