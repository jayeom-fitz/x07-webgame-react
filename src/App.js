import React from 'react';

import LikeButton from './LikeButton';
import Gugudan from './Gugudan';
import WordRelay from './WordRelay';
import NumberBaseball from './NumberBaseball';

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
          <button onClick={() => {this.setState({value : 2})}} >WordRelay</button>
          <button onClick={() => {this.setState({value : 3})}} >NumberBaseball</button>
        </div>
        {this.state.value === 0 ? 
          <LikeButton /> 
          : (this.state.value === 1 ?
            <Gugudan /> : (this.state.value === 2 ?
              <WordRelay /> : <NumberBaseball />
            )
          )
        }       
      </>
    );
  }
}
