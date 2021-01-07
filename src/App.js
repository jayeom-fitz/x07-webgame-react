import React from 'react';

import LikeButton from './LikeButton';
import Gugudan from './Gugudan';
import WordRelay from './WordRelay';
import NumberBaseball from './NumberBaseball';
import ReactionTimeCheck from './ReactionTimeCheck';
import RockPaperScissor from './RockPaperScissor';

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
          <button onClick={() => {this.setState({value : 4})}} >ReactionTimeCheck</button>
          <button onClick={() => {this.setState({value : 5})}} >RockPaperScissor</button>
        </div>
        {this.state.value === 0 ? 
          <LikeButton /> : (this.state.value === 1 ?
            <Gugudan /> : (this.state.value === 2 ?
              <WordRelay /> : (this.state.value === 3 ?
                <NumberBaseball /> : (this.state.value === 4 ?
                  <ReactionTimeCheck /> : <RockPaperScissor /> 
                )
              )              
            )
          )
        }       
      </>
    );
  }
}
