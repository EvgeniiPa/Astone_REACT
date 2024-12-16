import React, { Component } from "react";

export class Child extends Component {
  render() {
    const { name, age, isActive } = this.props; 
    return (
      <div>
        <h2>Дочерний компонент</h2>
        <p>Имя: {name}</p>
        <p>Возраст: {age}</p>
        <p>Активен: {isActive ? 'Да' : 'Нет'}</p>
      </div>
    );
  }
}