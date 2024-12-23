const Button = ({text, color}) => {

    const onClickButton = (e) => {
        console.log(e);
        console.log(text);
    }

    return (
        <button 
            onClick={onClickButton}
            style={{color: color}}
        >
            {text}
        </button>
    );
};

export default Button;