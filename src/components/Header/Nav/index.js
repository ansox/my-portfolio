import React from 'react';
import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../theme/utils/breakpointMedia';

const NavWrapper = styled.div`
  display: flex;
  line-height: 1.25%;
  justify-content: flex-end;
  align-items: center;
  height: 100%;

  ${breakpointsMedia({
    xs: css`
      font-size: 18px;
      margin-right: 0;
    `,
    md: css`
      font-size: 28px;
      margin-right: 50px;
    `,
  })}

  p {
    ${breakpointsMedia({
    xs: css`
        margin-right: 10px;

      `,
    md: css`
        margin-right: 25px;
      `,
  })}
  }
`;

const Nav = () => (
  <NavWrapper>
    <p>Sobre Mim</p>
    <p>Contato</p>
  </NavWrapper>
);

export default Nav;
