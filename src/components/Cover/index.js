import React from 'react';
import styled, { css } from 'styled-components';
import breakpointsMedia from '../../theme/utils/breakpointMedia';
import { TextStyleVariantsMap } from '../foundation/Text';

const StyledCover = styled.div`
  /* background-image:url(/images/uke.jpeg); */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  width:100%;
  height:600px;
`;

StyledCover.Title = styled.h1`
  margin: 0;
  text-align: center;
  ${breakpointsMedia({
    xs: css`
      font-size: 64px;
      font-weight: 400;
      line-height: 1.25;
    `,
    md: css`
      font-size: 90px;
      font-weight: 400;
      line-height: 1.25;
    `,
  })}
`;

StyledCover.SubTitle = styled.h2`
  margin: 0;
  ${TextStyleVariantsMap.subTitle}
`;

function Cover() {
  return (
    <StyledCover>
      <StyledCover.Title>Anderson Floriano</StyledCover.Title>
      <StyledCover.SubTitle>Portifólio</StyledCover.SubTitle>
    </StyledCover>
  );
}

export default Cover;
