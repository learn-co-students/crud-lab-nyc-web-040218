import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor(props){
    super(props);

    this.state={
      text: ''
    }
  }

  handleonSubmit = (event) => {
    event.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_RESTAURANT',
      restaurant: {
        text: this.state.text
      }
    })
    this.setState({
      text: ''
    })
  }

  handleonChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleonSubmit}>
          <input type="text" value={this.state.text} onChange={this.handleonChange} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
