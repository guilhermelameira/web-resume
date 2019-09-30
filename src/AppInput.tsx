import React from 'react';

const AppInput: React.FunctionComponent<{
  inputValue: string;
  handleInputValueChange(value: string): void;
}> = (props) => (
  <div id="input">
    <textarea
      value={props.inputValue}
      onChange={(e) => props.handleInputValueChange(e.target.value)}
    />
  </div>
);

export default AppInput;
