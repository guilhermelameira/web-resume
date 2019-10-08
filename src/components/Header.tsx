import React from 'react';
import {Header as TypeHeader} from '../types/Header';

const Header: React.FC<{
  ast: TypeHeader
}> = ({
  ast: {
    name,
    links
  }
}) => (
  <div id="header">
    <div>{name.value}</div>
    <div className="links">
      {links.map((link, index) => (
        <div key={index}>{link.value}</div>
      ))}
    </div>
  </div>
);

export default Header;
