import React from 'react';
import './Main.css';

const MainPage = () => props {
    const [enteredText, setEnteredText] = useState('');

    const addMainHandler = event =>{
        event.preventDefault();

        const newPage = {
            id: Math.random().toString(),
            text: enteredText
        };
        enteredText = '';
        props.onAddGoal(newPage);
    };

    setEnteredText('');
    
    const textChangeHandler = event => {
        enteredText = event.target.value;
    };
    return (
    <form className="main-page" onSumbit={addMainHandler}>
        <input type="text" value= {enteredText} onChange={textChangeHandler} />
        <button type="submit">Add Goal</button>
    </form>
    );
};
export default MainPage;