import React from 'react';

import Gugudan from './Gugudan';
import LikeButton from './LikeButton';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value : 0,
    }
  }

  render() {
    return (
      <>
        <div>
          <button onClick={() => {this.setState({value : 0})}} >LikeButton</button>
          <button onClick={() => {this.setState({value : 1})}} >Gugudan</button>
        </div>
        {this.state.value === 0 ? 
          <LikeButton /> 
          : 
          <Gugudan />
        }       
      </>
    );
  }
}
