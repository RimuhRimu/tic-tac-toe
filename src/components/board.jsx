import Square from './square.jsx'
const Board = ({onClick,squares,selected,lines}) => {
    let stySquare = {
        width: '100px',
        height: '100px',
    };
    const row = (whichRow) => {
        const rowSquares = [];
        const key = (i) => (whichRow*3)+i
        for (let row = 0, len = 3; row < len; row++) {
            if (lines) {
                rowSquares.push(
                    lines[0] === key(row) || lines[1] === key(row) || lines[2] === key(row) ? 
                    (<span key={key(row)}>
                    <Square key={key(row)}  
                        value={squares[key(row)]} 
                        onClick={() => onClick(key(row))} 
                        style={{...stySquare,background: '#000099'}} 
                        />
                        </span>)
                    : 
                    (<span key={key(row)}>
                    <Square 
                        key={key(row)} 
                        value={squares[key(row)]} 
                        onClick={() => onClick(key(row))}
                        style={{...stySquare}}
                        />
                        </span>)
                ) 
            }
            else{
                rowSquares.push(
                    selected === key(row) ? 
                    (<span key={key(row)}>
                    <Square key={key(row)}  
                        value={squares[key(row)]} 
                        onClick={() => onClick(key(row))} 
                        style={ squares[key(row)] ? {...stySquare,background: '#990000'} : {...stySquare}} 
                        className={'selected'}
                        />
                        </span>)
                    : 
                    (<span key={key(row)}>
                    <Square 
                        key={key(row)} 
                        value={squares[key(row)]} 
                        onClick={() => onClick(key(row))}
                        style={{...stySquare}}
                        />
                        </span>)
                ) 
            }
        }
        return rowSquares  
    };

    const rows = () => {
        const boardRows = [];
        for (let col = 0, len = 3; col < len; col++) {
            boardRows.push(
            <div key={col} className="board-row" >
                {row(col)}
            </div>
            )
        }
        return boardRows
    };
  
    return (
        <div className="board">
            {rows()}
        </div>
    );
};
export default Board
