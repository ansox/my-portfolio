import React from 'react';
import styled from 'styled-components';
import { TextStyleVariantsMap } from '../foundation/Text';

const StyledCover = styled.div`
  /* background-image:url(/images/uke.jpeg); */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width:100%;
  height:600px;
`;

StyledCover.Title = styled.h1`
  margin: 0;
  ${TextStyleVariantsMap.mainTitle}
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
