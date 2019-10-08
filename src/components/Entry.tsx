import React from 'react';
import {Entry as TypeEntry} from '../types/Section';
import SectionText from './SectionText';

const Entry: React.FC<{
  ast: TypeEntry
}> = ({
  ast: {
    title,
    subtitle,
    summary
  }
}) => (
  <div className="entry">
    <div>{title.value}</div>
    {subtitle && (
      <div>{subtitle.value}</div>
    )}
    {summary.map((s, index) => (
      <SectionText key={index} ast={s} />
    ))}
  </div>
);

export default Entry;
