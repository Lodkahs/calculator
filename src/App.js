import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {count: '', result: ''};
    window.addEventListener("keydown", this.numPress);
  }

  takeNumber = (number) => {
    this.setState((state) => {
      return {count: state.count + number.toString()}
    });
    this.equaleResult();
  };

  mult = () => {
    let lastSym = this.state.count.substring(this.state.count.length - 1, this.state.count.length);
    if (lastSym !== '*') {
      if (lastSym === '+' || lastSym === '/' || lastSym === '-') {
        this.clearPrevSymb()
      }
        this.setState((state) => {
          return {count: state.count + '*'}
        });
      }
  };

  minus = () => {
    let lastSym = this.state.count.substring(this.state.count.length - 1, this.state.count.length);
    if (lastSym !== '-') {
      if (lastSym === '+' || lastSym === '/' || lastSym === '*') {
        this.clearPrevSymb();
      }
      this.setState((state) => {
        return {count: state.count + '-'}
      });
    }
  };

  plus = () => {
    let lastSym = this.state.count.substring(this.state.count.length - 1, this.state.count.length);
    if (lastSym !== '+') {
      if (lastSym === '-' || lastSym === '/' || lastSym === '*') {
        this.clearPrevSymb();
      }
      this.setState((state) => {
        return {count: state.count + '+'}
      });
    }
  };

  division = () => {
    let lastSym = this.state.count.substring(this.state.count.length - 1, this.state.count.length);
    if (lastSym !== '/') {
      if (lastSym === '+' || lastSym === '-' || lastSym === '*') {
        this.clearPrevSymb();
      }
      this.setState((state) => {
        return {count: state.count + '/'}
      });
    }
  };

  equale = () => {
    this.setState((state) => {
      return {count: eval(state.count), result: ' '}
    });
  };

  equaleResult = () => {
    this.setState((state) => {
      return {result: eval(state.count)}
    })
  };

  coma = () => {
    if (this.state.count.substring(this.state.count.length - 1, this.state.count.length) !== '.') {
      this.setState((state) => {
        return {count: state.count + '.'}
      });
    }
  };

  plusMinus = () => {
    this.setState((state) => {
      return {count: -(state.count)}
    });
  };

  clearAll = () => {
    this.setState((state) => {
      return {count: '', result: ''}
    });
  };

  square = () => {
    this.setState((state) => {
      return {count: state.count * state.count, result: ''}
    });
  };

  clearPrevSymb = () => {
    let str = this.state.count.toString();
    str = str.substring(0, str.length-1);
    this.setState((state) => {
      return {count: str}
    });
  };

  numPress = (e) => {
    console.log(e);
    switch (e.key) {
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        this.takeNumber(e.key);
        break;
      case '-':
        this.minus();
        break;
      case '+':
        this.plus();
        break;
      case '.':
        this.coma();
        break;
      case '*':
        this.mult();
        break;
      case 'Backspace':
        this.clearPrevSymb();
        break;
      case  'Delete':
        this.clearAll();
        break;
      case 'Enter':
        this.equale();
        break;
      case '/':
        this.division();
        break;
      default:
        break;

    }
  };
  //±

  render() {
    return (
      <div className='calc' onKeyDown={this.numPress}>
        <div className='numberField'>{this.state.count === '' ? 0 : this.state.count}</div>
        <div className="result">{this.state.result}</div>
        <div className="calc-row">
          <div className="sign" onClick={this.clearAll}>C</div>
          <div className="sign" onClick={this.square}>X^2</div>
          <div className="sign" onClick={this.division}>÷</div>
          <div className="sign" onClick={this.clearPrevSymb}>←</div>
        </div>
        <div className='calc-row'>
          <div className="sign" onClick={this.mult}>×</div>
          <div onClick={() => this.takeNumber(9)}>9</div>
          <div onClick={() => this.takeNumber(8)}>8</div>
          <div onClick={() => this.takeNumber(7)}>7</div>
        </div>
        <div className='calc-row'>
          <div className="sign" onClick={this.minus}>-</div>
          <div onClick={() => this.takeNumber(6)}>6</div>
          <div onClick={() => this.takeNumber(5)}>5</div>
          <div onClick={() => this.takeNumber(4)}>4</div>
        </div>
        <div className='calc-row'>
          <div className="sign" onClick={this.plus}>+</div>
          <div onClick={() => this.takeNumber(3)}>3</div>
          <div onClick={() => this.takeNumber(2)}>2</div>
          <div onClick={() => this.takeNumber(1)}>1</div>
        </div>
        <div className='calc-row'>
          <div className="sign" onClick={this.equale}>=</div>
          <div onClick={this.coma}>,</div>
          <div onClick={() => this.takeNumber(0)}>0</div>
          <div onClick={this.plusMinus}>±</div>
        </div>

      </div>
    );
  }
}

export default App;
