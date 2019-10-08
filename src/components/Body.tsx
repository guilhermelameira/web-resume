import React from 'react';
import {Body as TypeBody} from '../types/Body';
import Section from './Section';

const Body: React.FC<{
  ast: TypeBody
}> = ({
  ast
}) => (
  <div id="body">
    {ast.map((section, index) => (
      <Section key={index} ast={section} />
    ))}
  </div>
);

export default Body;
