import React from 'react';
import ButtonCounter from './components/ButtonCounter';
import TodoItemsList from "./components/TodoItemsList";
import './App.css';

class App extends React.Component { 

  state = {
    counter: 0,
    items: [
      {title: "item1", done: false},
      {title: "item2", done: true}      
    ],
  };

  incrementStateCounter = (increment) => {
    this.setState(prevState => (
      {
        counter: prevState.counter + increment
      }));
 };

  render() {   
    return (
      <div className="App">
        Hello world!<br/>
        Current counter: {this.state.counter}<br />
        <ButtonCounter counter={this.state.counter} incrementCounterFunction={this.incrementStateCounter} increment={Number(1)} />
        <ButtonCounter counter={this.state.counter} incrementCounterFunction={this.incrementStateCounter} increment={Number(2)} />      

        <main>
          <div class="container">
            <h1 class="app-title">todos</h1>
            
            <TodoItemsList items={this.state.items} />
            <ul class="todo-list js-todo-list"></ul>

            <form class="js-form">
              <input autofocus type="text" aria-label="Enter a new todo item" placeholder="E.g. Build a web app" class="js-todo-input"/>
            </form>
          </div>
        </main>     
      </div>
  );
}

}

export default App;
