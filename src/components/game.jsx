import {useState} from 'react'
import calculateWinner from './winner.jsx'
import Board from './board.jsx'
import jumpTo from './jumpto.jsx'
import sorting from './sorting.jsx'
import handleClick from './handleclick.jsx'

const Game = () => {
    const [state,setState] = useState({
        history: [{
            squares: Array(9).fill(null),
        }],
        currentSqur: null,
        stepNumber: 0,
        xIsNext: true,
        sort: false,
        row: [],
        col: [],
        }
    );

  const history = state.history;

  const {squares} = history[state.stepNumber];

  const winner = calculateWinner(squares)
  const linesOfWinner = winner ? winner.lines : null;

  const moves = history.map( (step,move) => {
      const desc = move ? `Go to move #${move}` : `Restart`;
      const pos = move !== 0 && state.row[move-1] ? `Row ${state.row[move-1]} Col ${state.col[move-1]}` : '';
      return (
        <li key={move} className='item'  >
            <div className='item-content'  >
                <button onClick={()=> jumpTo(move,state,setState)} >
                    {desc}
                </button>
                <div>
                  {pos}
                </div>
            </div>
        </li>
      )
  });

    let status;
    const searchFilledBoard = (squares) => {
        let vals = [];
        for (let i = 0, len = squares.length; i < len; i++) {
            if (squares[i]) {
                vals.push(squares[i])
            }
        }
        return vals.length === 9 ? true : false
    };
    if (winner) {
        status =`Winner: ${winner.winner}` 
    }
    else if(searchFilledBoard(squares)){
        status = `No one had wins :( but can go to start!`
    }
    else{
        status = `Next player: ${state.xIsNext ? 'x' : 'O'}`
    }

    return (
      <div className="game">
        <div className="game-board">
          <div className='status' >{ status }</div>
          <Board 
           squares={squares}
           onClick={(i) => handleClick(i,state,setState)}
           selected={state.currentSqur}
           lines={linesOfWinner}
            />
            <button onClick={() => sorting(state.sort,setState)} className='sort' >Sort</button>
        </div>
        <div className="game-info">
            <ul className='list' type='none' >{ state.sort ? moves.reverse() :  moves }</ul>
        </div>
      </div>
    );
};

export default Game
