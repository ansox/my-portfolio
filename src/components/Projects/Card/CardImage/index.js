import React from 'react';
import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/utils/breakpointMedia';

const CardImageWrapper = styled.div`
  

  ${breakpointsMedia({
    xs: css`
      width: 288px;
      height: 178px;
      margin-left: auto;
      /* margin-right: auto; */
    `,
    md: css`
      width: 287px;
      height: 390px;
    `,
  })}

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CardImage = () => (
  <CardImageWrapper>
    <img src="https://source.unsplash.com/random" alt="Imagem do projeto" />
  </CardImageWrapper>
);

export default CardImage;
