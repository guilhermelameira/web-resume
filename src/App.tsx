import React, {Component} from 'react';
import AppInput from './AppInput';
import AppOutput from './AppOutput';
import './App.css';

class App extends Component {
  state = {
    inputValue: ''
  };

  handleClick = () => {
    if (this.state.inputValue) console.log('Input:', this.state.inputValue);
  };

  handleInputValueChange = (value: string) => {
    this.setState({inputValue: value});
  };

  render = () => {
    return (
      <div id="home">
        <div>
          <span>CPSC 410 DSL</span>
          <button
            onClick={this.handleClick}
          >
            Compile
          </button>
        </div>
        <div>
          <AppInput
            inputValue={this.state.inputValue}
            handleInputValueChange={this.handleInputValueChange}
          />
          <AppOutput />
        </div>
      </div>
    );
  };
}

export default App;
