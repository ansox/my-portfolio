import React from 'react';
import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../theme/utils/breakpointMedia';

const LogoWrapper = styled.div`
  background-color: #E9C46A;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFF;

  ${breakpointsMedia({
    xs: css`
      width: 120px;
      margin-left: 16px;
      font-size: 18px;
      line-height: 22px;
    `,
    md: css`
      width: 210px;
      font-size: 38px;
      line-height: 46px;
    `,
  })}
`;

const Logo = () => (
  <LogoWrapper>
    <span>{'<ansodev />'}</span>
  </LogoWrapper>
);

export default Logo;
