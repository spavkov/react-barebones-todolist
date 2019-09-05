import React from 'react';

function TodoItemsList(props) {

    const itemIsChecked = (item) => {
        return item.done;
    };

    const deleteItemWithIndex = (event) => {
        let index = Number(event.target.attributes["index"].value);
        console.log('deleting item with index: ' + index);
        props.removeTodoItemByIndexFunction(index);
    };    

    const handleCheckboxStateChange = (event, item) => {
        let index = Number(event.target.attributes["index"].value);
        console.log('toggle done status of item with index : ' + index);        
        props.toggleDoneStatusOfItemWithIndexFunction(index);
    };    

    return (
        <ul className="todo-list js-todo-list">
        {
            props.items.map((item, index) => (
            <li className="todo-item" key={index}>
            <input type="checkbox" index={index} defaultChecked={itemIsChecked(item)} onChange={handleCheckboxStateChange} /> 
            <span>{item.title}</span>
            <button className="delete-todo js-delete-todo" index={index} onClick={deleteItemWithIndex}>
            <svg><use href="#delete-icon"></use></svg>
            </button>
            </li>
        ))}
        
        </ul>
    );

}

export default TodoItemsList;