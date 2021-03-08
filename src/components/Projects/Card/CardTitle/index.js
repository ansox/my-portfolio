import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import breakpointsMedia from '../../../../theme/utils/breakpointMedia';

const CardTitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content:center;
  align-items: center;

  ${breakpointsMedia({
    xs: css`
      height: 72px;
    `,
    md: css`
      height: 120px;
    `,
  })}

  h1 {
    ${breakpointsMedia({
    xs: css`
      font-size: 24px;
      font-weight: 700;
    `,
    md: css`
      font-size: 32px;
      font-weight: 700;
    `,
  })}
  }  
`;

const CardTitle = ({ children }) => (
  <CardTitleWrapper>
    <h1>{children}</h1>
  </CardTitleWrapper>
);

CardTitle.defaultProps = {
  children: null,
};

CardTitle.propTypes = {
  children: PropTypes.node,
};

export default CardTitle;
