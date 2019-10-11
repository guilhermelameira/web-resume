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
  <header className="header">
    <h1 className="name">{name.value}</h1>
    <p className="contact">
      {links.map((link, index) => (
        <a key={index}>{link.value}</a>
      ))}
    </p>
  </header>
);

export default Header;
