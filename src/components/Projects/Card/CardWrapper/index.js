import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/utils/breakpointMedia';

const CardWrapper = styled.div`
  box-sizing: content-box;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  margin: 0;

  ${breakpointsMedia({
    xs: css`
      width: 290px;
      height: 249px;
    `,
    md: css`
      width: 288px;
      height: 510px;
    `,
  })}
`;

export default CardWrapper;
