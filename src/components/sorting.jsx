const sorting = (sort,setState) => {
    sort ? 
        setState( (old) => {
            const obj = old;
            return {
                ...obj,
                sort: !obj.sort
            }
        }) :

        setState( (old) => {
            const obj = old;
            return {
                ...obj,
                sort: !obj.sort
            }
        })
};

export default sorting
