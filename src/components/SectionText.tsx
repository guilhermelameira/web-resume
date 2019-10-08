import React from 'react';
import {SectionText as TypeSectionText} from '../types/Text';

const SectionText: React.FC<{
  ast: TypeSectionText
}> = ({
  ast: {
    value,
    is_bullet
  }
}) => (
  <div className="section-text">
    {is_bullet && (
      <div className="bullet"></div>
    )}
    <div>
      {value.map((text, index) => (
        <span
          key={index}
          className={text.decorator}
        >
          {text.value}
        </span>
      ))}
    </div>
  </div>
);

export default SectionText;
