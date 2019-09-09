import React from 'react';
import { Link } from 'gatsby';

import { rhythm } from '../utils/typography';
import styled from 'styled-components';

const linksObj = [
  { title: 'About', path: '/about' },
  { title: 'Contact', path: '/contact' },
];

const NavLinks = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  margin: 0;
`;

const NavLi = styled.li`
  color: red;
  :not(:last-child) {
    margin-right: 15px;
  }
`;

const NavA = styled.a`
  color: #555;
  box-shadow: none;
`;

const NavLink = styled(Link)`
  color: #555;
  box-shadow: none;
`;

const Menu = () => (
  <nav>
    <NavLinks>
      {linksObj.map(link =>
        link.type === 'a' ? (
          <NavLi>
            <NavA href={link.path}>{link.title}</NavA>
          </NavLi>
        ) : (
          <NavLi>
            <NavLink to={link.path}>{link.title}</NavLink>
          </NavLi>
        )
      )}
    </NavLinks>
  </nav>
);

export default Menu;
