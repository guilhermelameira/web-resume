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
        return <strong key={index}>{piece.value}</strong>;
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
