import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../theme/utils/breakpointMedia';

const CardsSection = styled.div`
  display: flex;
  justify-content: space-around;

  ${breakpointsMedia({
    xs: css`
      flex-direction: column;
    `,
    md: css`
      flex-direction: row;
    `,
  })}
`;

export default CardsSection;
