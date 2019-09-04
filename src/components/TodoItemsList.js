import React from 'react';

class TodoItemsList extends React.Component {

    render(props) {
        return (
            <ul className="todo-list js-todo-list">

            {
                this.props.items.map((item, index) => (
                <li className="todo-item" key={index}>
                <input type="checkbox" />
                <label className="tick js-tick"></label>
                <span>{item.title}</span>
                <button className="delete-todo js-delete-todo">
                <svg><use href="#delete-icon"></use></svg>
                </button>
                </li>
            ))}
           
            </ul>
        );
    }

}

export default TodoItemsList;