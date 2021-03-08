import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../theme/utils/breakpointMedia';

const SectionTitle = styled.h1`
  text-align: center;
  font-weight: 400;
  
  ${breakpointsMedia({
    xs: css`
      font-size: 36px;
    `,
    md: css`
      font-size: 60px;
    `,
  })}
`;

export default SectionTitle;
