import React from 'react';

export default class Gugudan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num : [Math.ceil(Math.random() * 9), 
             Math.ceil(Math.random() * 9)],
      score : 0,
      value : '',
      result : '',
    }      
  }

  onSubmit = (event) => {
    event.preventDefault();
    const answer = this.state.num[0] * this.state.num[1];
    const myAns = parseInt(this.state.value);
    let result = '';
    let score = 0;
    if(answer === myAns) {
      result = '정답입니다. 답은 '+answer+' 입니다.'; score = 10;
    } else {
      result = '틀렸습니다. 답은 '+answer+' 입니다.'; score = -5;
    }
    this.setState({
      num : [Math.ceil(Math.random() * 9), 
             Math.ceil(Math.random() * 9)],
      score : this.state.score + score,
      value : '',
      result : result,
    });
  };

  onChange = (event) => {
    this.setState({ 
      value : event.target.value,
    });
  };

  render() {
    return (
      <div>
        SCORE : {this.state.score}<br/>
        {this.state.num[0]} * {this.state.num[1]} = ?<br/>
        <form onSubmit={this.onSubmit}>
          <input type="number" value={this.state.value} onChange={this.onChange}/>
          <button>input</button>
        </form>
        {this.state.result}
      </div>
    );
  }
}