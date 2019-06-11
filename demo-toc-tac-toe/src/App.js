import React from 'react';
import './App.css';

const Square = (props) => {
  const { value, handlerClick } = props;
  return (
    <button 
      className="square"
      onClick={ handlerClick }
    
    >{ value }</button>
  )
}

class Board extends React.Component {
  renderSquare = (i) => {
    return (
      <Square 
        value={this.props.currentList[i]}
        handlerClick={() => this.props.handlerClick(i)}
      ></Square>
    )
  }

  render() {
    const { renderSquare } = this;
    return (
      <div className="board">
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
        
      </div>
    )
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      xIsNext: true,
      history: [{
        text: 'reset',
        data: Array(9).fill(null)
      }],
      stepNumber: 0
    }
  }

  handlerClick = (i) => {
    const {  xIsNext, history, stepNumber } = this.state;
    const currentList = history[stepNumber].data;
    const nextCurList = currentList.slice();
    if(calculateWinner(currentList) || currentList[i]){
      return;
    }
    nextCurList[i] = xIsNext ? 'X' : 'O';
    let nextHistory = history.slice(0, stepNumber+1)
    nextHistory = nextHistory.concat([
      {
        'text': 'Go to game #'+history.length,
        'data': nextCurList
      }
    ])
    this.setState({
      xIsNext: !xIsNext,
      history: nextHistory,
      stepNumber: nextHistory.length-1
    })
  }


  handlerHistory = (i) => {
    this.setState({
      stepNumber: i,
      xIsNext: (i%2) ? false : true
    })
  }

  render() {
    const { xIsNext, history, stepNumber } = this.state;
    const currentList = history[stepNumber].data;
    const winner = calculateWinner(currentList);
    let status = "winner:" + winner;
    if(!winner){
      status = `Next Player: ${xIsNext ? 'X': 'O'}`;
    }
    const historySteps = history.map((item, index) => {
      return (
        <div key={index}>
          <span>{index+': '}</span>
          <button onClick={ () => this.handlerHistory(index) }>{item.text}</button>
        </div>
      )
    })
    return (
      <div className="game">
        <Board 
          currentList={currentList}
          handlerClick={this.handlerClick}
        />
        <div>
          <div className="status">{ status }</div>
          { historySteps }
        </div>
       
      </div>
    );
  }
  
}

export default App;
