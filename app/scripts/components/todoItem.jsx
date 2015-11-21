var TodoItem = React.createClass({
  click: function(){
    console.log('clicked');
  },
  render: function(){
    return <div onClick={this.click}>Hello {this.props.name} </div>;
  }
});

module.exports = TodoItem;