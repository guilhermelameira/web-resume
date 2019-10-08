import React from 'react';
import {Section as TypeSection} from '../types/Section';
import Entry from './Entry';

const Section: React.FC<{
  ast: TypeSection
}> = ({
  ast: {
    title,
    entries
  }
}) => (
  <div className="section">
    <div>{title.value}</div>
    {entries.map((entry, index) => (
      <Entry key={index} ast={entry} />
    ))}
  </div>
);

export default Section;
