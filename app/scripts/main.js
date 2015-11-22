var TodoItem = require('./components/todoItem.jsx');

var parent = document.querySelector('.jumbotron');
var props = {
  title: "Hello",
  notes: "these are notes",
  complete: true
};
ReactDOM.render(<TodoItem {...props} />, parent);