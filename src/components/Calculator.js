import React, { Component } from 'react';
import Display from './Display';
import Keypad from './Keypad';

export default class Calculator extends Component {
  state = {
    displayValue: '0',
    smallValue: null,
    numbers: ['9', '8', '7', '6', '5', '4', '3', '2', '1', '.', '0', 'AC'],
    operators: ['/', 'x', '+', '-'],
    needNumber: true,
  };

  updateDisplay = (number) => {
    this.setState({ needNumber: false });
    if (number === 'AC') {
      this.setState({ displayValue: '0', smallValue: null, needNumber: true });
      return;
    }

    let displayValue;
    let smallValue;

    if (this.state.smallValue && this.state.smallValue.includes('=')) {
      displayValue = number === '.' ? '0.' : number;
      smallValue = displayValue;
    } else {
      if (number === '0' && this.state.displayValue === '0') {
        displayValue = this.state.displayValue;
        smallValue = this.state.smallValue;
      } else if (number !== '0' && this.state.displayValue === '0') {
        displayValue = number === '.' ? '0.' : number;
        if (this.state.smallValue) {
          smallValue = this.state.smallValue.slice(0, -1) + displayValue;
        } else {
          smallValue = displayValue;
        }
      } else {
        if (
          number === '.' &&
          this.state.operators.includes(this.state.displayValue)
        ) {
          number = '0.';
        }
        displayValue = this.state.displayValue + number;
        smallValue = this.state.smallValue + number;
      }
    }

    if (
      displayValue.length > 1 &&
      this.state.operators.includes(displayValue[0])
    ) {
      displayValue = displayValue.substring(1);
    }

    this.setState({ displayValue: displayValue, smallValue: smallValue });
  };

  setOperator = (operator) => {
    if (this.state.needNumber && (operator === 'x' || operator === '/')) {
      return;
    }

    if (this.state.smallValue && this.state.smallValue.includes('=')) {
      const newValue = this.state.displayValue + operator;
      this.setState({ displayValue: operator, smallValue: newValue });
      return;
    }

    this.setState({
      smallValue: this.state.smallValue
        ? this.state.smallValue + operator
        : operator,
      displayValue: operator,
      needNumber: true,
    });
  };

  callOperator = () => {
    let expression = this.state.smallValue;
    // Break up expression into numbers and operators
    expression = expression.replace(/x/g, '*');
    let value = eval(expression);

    this.setState({
      displayValue: value.toString(),
      smallValue: this.state.smallValue + ' = ' + value.toString(),
    });
  };

  render() {
    return (
      <div className='calculator'>
        <Display
          smallValue={this.state.smallValue}
          displayValue={this.state.displayValue}
        />
        <Keypad
          numbers={this.state.numbers}
          operators={this.state.operators}
          updateDisplay={this.updateDisplay}
          setOperator={this.setOperator}
          callOperator={this.callOperator}
        />
      </div>
    );
  }
}
