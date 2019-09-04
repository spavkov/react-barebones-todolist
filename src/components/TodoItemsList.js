import React from 'react';

class TodoItemsList extends React.Component {

    render(props) {
        return (
            <ul class="todo-list js-todo-list">

            {
                this.props.items.map((item, index) => (
                <li class="todo-item" data-key="1567603200915">
                <input id="1567603200915" type="checkbox" />
                <label for="1567603200915" class="tick js-tick"></label>
                <span>{item.title}</span>
                <button class="delete-todo js-delete-todo">
                <svg><use href="#delete-icon"></use></svg>
                </button>
                </li>
            ))}
           
            </ul>
        );
    }

}

export default TodoItemsList;