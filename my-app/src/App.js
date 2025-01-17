import React, { Component } from "react";
import { Child } from "./Child";


const ItemList = ({ items }) => (
  <ul>
    {items.map((item, index) => (
      <li key={index}>{item}</li> 
    ))}
  </ul>
);

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      items: ['Item 1', 'Item 2', 'Item 3'], 
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFocusInput = this.handleFocusInput.bind(this);
  }

  componentDidMount() {
    console.log('componentDidMount: Компонент смонтирован');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate: Компонент был обновлён');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount: Компонент будет размонтирован');
  }

  handleClick(event) {
    event.preventDefault();
    console.log('Submitted name:', this.state.name);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleFocusInput() {
    this.inputRef.focus();
  }

  render() {
    const isReactIncluded = this.state.name.toLowerCase().includes('реакт');

    return (
      <React.Fragment>
        <h1>Форма ввода имени</h1>
        <form>
          <label>
            Имя:
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
              ref={(ref) => (this.inputRef = ref)} 
            />
          </label>
          <button 
            type="submit" 
            onClick={this.handleClick} 
            disabled={isReactIncluded} 
          >
            Отправить
          </button>
          <button type="button" onClick={this.handleFocusInput}>Фокус на инпут</button>
        </form>
        {this.state.name && <p>Вы ввели: {this.state.name}</p>}
        <Child name={this.state.name} age={21} isActive={true} />
        
       
        <ItemList items={this.state.items} />
      </React.Fragment>
    );
  }
}



