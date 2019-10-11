import React from 'react';
import {SectionText as TypeSectionText} from '../types/Text';
import RichText from './RichText';

const SectionText: React.FC<{
  ast: TypeSectionText
}> = ({
  ast: {
    value,
    is_bullet
  }
}) => (
  <React.Fragment>
    {is_bullet && (
    <li className="bullet">
      <RichText ast={value} />
    </li>
    )}
    {!is_bullet && (
    <p>
      <RichText ast={value} />
    </p>
    )}
  </React.Fragment>
);

export default SectionText;
