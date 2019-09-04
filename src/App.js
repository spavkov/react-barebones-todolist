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

  incrementStateCounter = (increment) => {
    this.setState(prevState => (
      {
        counter: prevState.counter + increment
      }));
 };

  render() {   
    return (
      <div>
        Hello world!<br/>
        Current counter: {this.state.counter}<br />
        <ButtonCounter counter={this.state.counter} incrementCounterFunction={this.incrementStateCounter} increment={Number(1)} />
        <ButtonCounter counter={this.state.counter} incrementCounterFunction={this.incrementStateCounter} increment={Number(2)} />      

        <main>
          <div className="container">
            <h1 className="app-title">todos</h1>
            
            <TodoItemsList items={this.state.items} />

            <AddTodoItem addNewItemFunction={this.addNewTodoItem} />

          </div>
        </main>     
      </div>
  );
}

}

export default App;
