import React, {Component} from 'react';
import AppInput from './AppInput';
import AppOutput from './AppOutput';
import './App.css';
import {ResumeParser} from './parser/ResumeParser';

class App extends Component {
  state = {
    inputValue: '',
    parsedValue: null,
    parsedError: null
  };

  handleClick = () => {
    let parsedResume = null;
    try {
      parsedResume = ResumeParser.parse(this.state.inputValue);
      this.setState({
        parsedValue: parsedResume,
        parsedError: null
      });
    } catch (e) {
      this.setState({parsedError: e});
    }
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
          <AppOutput
            parsed={this.state.parsedValue}
            error={this.state.parsedError}
          />
        </div>
      </div>
    );
  };
}

export default App;
