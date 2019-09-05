import React from 'react';
import ButtonCounter from './components/ButtonCounter';
import TodoItemsList from './components/TodoItemsList';
import AddTodoItem from "./components/AddTodoItem";
import './App.css';

class App extends React.Component { 

  state = {
    counter: 0,
    items: [
      {title: "item1", done: false},
      {title: "item2", done: true}      
    ],
  };

  addNewTodoItem = (newItemTitle) => {
    console.log("adding item " + newItemTitle);   
    this.setState(
      function (state, props) {
        state.items.push({
          title: newItemTitle,
          done: false
        });

        return {
          items: state.items
        };
      }
    );
  };

  removeTodoItemByIndex = (index) => {
    this.setState(
      function (state, props) {

        state.items.splice(index, 1);

        return {
          items: state.items
        };
      }
    );
  };  

  toggleDoneStatusOfItemWithIndex = (index) => {
    this.setState((state, props) => {
      state.items[index].done = !state.items[index].done;

      return {
        items: state.items
      };      

    });
  };

  render() {   
    return (
      <div>

        <main>
          <div className="container">
            <h1 className="app-title">todos</h1>
            
            <TodoItemsList items={this.state.items} toggleDoneStatusOfItemWithIndexFunction={this.toggleDoneStatusOfItemWithIndex} removeTodoItemByIndexFunction={this.removeTodoItemByIndex} />

            <AddTodoItem addNewItemFunction={this.addNewTodoItem}  />

          </div>
        </main>     
      </div>
  );
}

}

export default App;
