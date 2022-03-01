const jumpTo = (step,state,setState) => {
        setState( (old) => {
            const obj = old;
            return {
            ...obj,
            stepNumber: step,
            xIsNext: (step % 2) === 0,
            }
        })
};
export default jumpTo
