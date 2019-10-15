import React from 'react';
import {RichText as TypeRichText} from '../types/Text';

const RichText: React.FC<{
  ast: TypeRichText
}> = ({ ast }) => (
  <React.Fragment>
    {ast.map((piece, index) => {
      if (piece.decorator === 'EMPHASIS') {
        return <b key={index}>{piece.value}</b>;
      } else if (piece.decorator === 'TOKEN') {
        return <strong key={index}>{piece.value.trim()}</strong>;
      } else if (piece.decorator === 'ICON') {
        // TODO icons need a better abstract syntax
        let iconClassName = 'icofont ';
        const value = piece.value.replace(/\s/g,'');
        const hasNum = '0123456789'
          .split('')
          .some(num => value.indexOf(num) >= 0);
        if (hasNum) {
          const match = value.match(/\d+/);
          if (match) {
            const numIndex = match.index || value.length;
            const iconName = value.substring(0, numIndex);
            const iconSize = value.substring(numIndex, value.length);
            iconClassName += `icofont-${iconName} icofont-${iconSize}`;
          }
        } else {
          iconClassName += `icofont-${value}`;
        }
        return <i key={index} className={iconClassName} />;
      }
      return (
        <React.Fragment key={index}>
          {piece.value}
        </React.Fragment>
      );
    })}
  </React.Fragment>
);

export default RichText;
