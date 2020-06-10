import React from 'react';
import 
const MainPage = () => {
    const addMainHandler = event =>{
        event.preventDefault();

        const newPage = {
            id: Math.random().toString(),
            text: 'Dodano nowy rekord'
        };
        console.log(newPage);
    };
    return (
    <form className="main-page" onSumbit={addMainHandler}>
        <input type="text" />
        <button type="submit">submit</button>
    </form>
    );
};
export default MainPage;