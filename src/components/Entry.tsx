import React from 'react';
import {Entry as TypeEntry} from '../types/Section';
import RichText from './RichText';
import SectionText from './SectionText';

const Entry: React.FC<{
  ast: TypeEntry
}> = ({
  ast: {
    title,
    subtitle,
    summary
  }
}) => {
  return (
    <ul className="entry">
      {(title && title.length) ? (<h3 className="title">
        <RichText ast={title} />
      </h3>): null}
      {(subtitle && subtitle.length) ? (
        <h4 className="title">
          <RichText ast={subtitle} />
        </h4>
      ) : null}
      {summary.map((s, index) => (
        <SectionText key={index} ast={s} />
      ))}
    </ul>
  );
};

export default Entry;
