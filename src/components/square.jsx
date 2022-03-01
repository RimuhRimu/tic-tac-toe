const Square= ({onClick,value,style,className}) => {
    return (
        <button 
            className={`squares ${className ? className : ''}`} 
            onClick={onClick}
            style={style}
        >
          {value}
      </button>
    );
};

export default Square

