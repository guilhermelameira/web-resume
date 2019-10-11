import React from 'react';
import {Body as TypeBody} from '../types/Body';
import Section from './Section';

const Body: React.FC<{
  ast: TypeBody
}> = ({
  ast
}) => (
  <main className="body">
    {ast.map((section, index) => (
      <Section key={index} ast={section} />
    ))}
  </main>
);

export default Body;
