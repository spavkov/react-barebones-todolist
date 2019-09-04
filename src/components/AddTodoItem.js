import React, {useState} from 'react';

function AddTodoItem(props) {

    const [title, setTitle] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();   
        props.addNewItemFunction(title);
        setTitle('');
    };

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    return (
        <form className="js-form" onSubmit={handleSubmit}>
            <input type="text" aria-label="Enter a new todo item" placeholder="E.g. Buy milk on a way home" className="js-todo-input" value={title} onChange={handleChange} />
        </form>
    );

}

export default AddTodoItem;

