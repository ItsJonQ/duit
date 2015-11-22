var TodoItem = React.createClass({
  toggleChecked: function(event){
    this.setState({ complete: event.target.checked });
  },

  render: function(){
    return (
      <div>
        <input type="checkbox" checked={complete} onClick={this.toggleChecked} />
        <h5>{this.props.title}</h5>
        {this.props.notes}
      </div>
    );
  }
});

module.exports = TodoItem;