import React from 'react';
import Logo from './Logo';
import HeaderWrapper from './HeaderWrapper';
import Nav from './Nav';

const Header = () => (
  <HeaderWrapper>
    <HeaderWrapper.LeftSide>
      <Logo />
    </HeaderWrapper.LeftSide>

    <HeaderWrapper.RightSide>
      <Nav />
    </HeaderWrapper.RightSide>
  </HeaderWrapper>
);

export default Header;
