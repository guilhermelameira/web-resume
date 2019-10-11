import React from 'react';
import {Section as TypeSection} from '../types/Section';
import Entry from './Entry';
import RichText from './RichText';

const Section: React.FC<{
  ast: TypeSection
}> = ({
  ast: {
    title,
    entries
  }
}) => {
  return (
    <div className="section">
      <h2 className="title">
        <RichText ast={title} />
      </h2>
      {entries.map((entry, index) => (
        <Entry key={index} ast={entry} />
      ))}
    </div>
  );
};

export default Section;
