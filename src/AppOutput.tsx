import React from 'react';
import {Program as TypeProgram} from './types/Program';
import Header from './components/Header';
import Body from './components/Body';

const AppOutput: React.FC<{
  parsed: TypeProgram | null,
  error: any
}> = ({
  parsed,
  error
}) => (
  <div id="output" className="canvas">
    {error && (
      <div>{error.toString()}</div>
    )}
    {!error && parsed && (
          <div className="resume letter">
            <Header ast={parsed.header} />
            {parsed.body && <Body ast={parsed.body} />}
          </div>
    )}
  </div>
);

export default AppOutput;
