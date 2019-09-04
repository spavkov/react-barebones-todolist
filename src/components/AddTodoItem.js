import React from 'react';

class AddTodoItem extends React.Component {

    render(props) {
        return (
            <form class="js-form">
              <input autofocus type="text" aria-label="Enter a new todo item" placeholder="E.g. Buy milk on a way home" class="js-todo-input"/>
            </form>
        );
    }

}

export default AddTodoItem;

