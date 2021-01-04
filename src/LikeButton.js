import React from 'react';

const e = React.createElement;

export default class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked : false,
    }      
  }

  render() {
    return e('button', {
      onClick : () => this.setState({ liked : !this.state.liked })
    }, this.state.liked ? 'Liked' : 'Like');
  }
}