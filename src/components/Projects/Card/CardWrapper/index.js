import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/utils/breakpointMedia';

const CardWrapper = styled.div`
  display: flex;
  box-sizing: content-box;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  margin: 0;

  ${({ highlight }) => (
    highlight
      ? css`
        flex-direction: row;
        ${breakpointsMedia({
      xs: css`
          width: 290px;
          height: 249px;
          margin-bottom: 15px;
          order: 1;
        `,
      md: css`
          width: 900px;
          height: 320px;
        `,
    })}
      `
      : css`
        flex-direction: column;

      ${breakpointsMedia({
      xs: css`
          width: 290px;
          height: 249px;
          margin-bottom: 15px;
        `,
      md: css`
          width: 288px;
          height: 510px;
        `,
    })}
    `
  )}
  
`;

export default CardWrapper;
