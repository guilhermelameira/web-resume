import React, {Component} from 'react';
import AppInput from './AppInput';
import AppOutput from './AppOutput';
import './App.css';
import './styles/resume.css';
import {ResumeParser} from './parser/ResumeParser';

class App extends Component {
  state = {
    inputValue: '',
    parsedValue: null,
    parsedError: null
  };

  runParser = () => {
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

  handleInputValueChange = async (value: string) => {
    await this.setState({inputValue: value});
    this.runParser();
  };

  render = () => {
    return (
      <div id="home">
        {/* <div id="header">
          <span>Web Resume</span>
        </div> */}
        <div id="appBody">
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
