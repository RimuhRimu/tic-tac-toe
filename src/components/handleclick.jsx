import calculateWinner from './winner.jsx'
const position = (i) =>  {
     let row,col;
        if (i <= 2) {
                row = 1;
                col = i+1;
         } 
         else if(i <= 5){
             row = 2;
             col = i-2;
          }
          else{
             row = 3;
             col = i-5;
          }
     return [row,col]
  }

const handleClick = (i,state,setState) => {
    const history = state.history.slice(0,state.stepNumber+1);
    const current = history[history.length-1];
    const squares = current.squares.slice();
    const row = state.history.length-1 !== state.stepNumber ? 
        state.row.slice(0,state.stepNumber).concat(position(i)[0])
        : state.row.concat(position(i)[0]);
    const col = state.history.length-1 === state.stepNumber ? 
        state.col.slice(0,state.stepNumber).concat(position(i)[1]) 
        : state.col.concat(position(i)[1]);
    if (calculateWinner(squares) || squares[i]) {
       return;
    }
    squares[i] = state.xIsNext ? 'X' : 'O'
    setState( (old) => {
         const obj = old;
         return {
             ...obj,
            history: history.concat([{
                squares: squares,
            }]),
            currentSqur: i,
            stepNumber: history.length,
            xIsNext: !state.xIsNext,
            row: row,
            col: col,
         }
    })
};

export default handleClick
