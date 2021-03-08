import styled, { css } from 'styled-components';
import breakpointsMedia from '../../theme/utils/breakpointMedia';

const HeaderWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  width: 100%;
  height: 67px;
  display: flex;
  justify-content: space-between;

  ${breakpointsMedia({
    xs: css`
      height: 40px;
    `,
    md: css`
      height: 67px;
    `,
  })}
`;

HeaderWrapper.LeftSide = styled.div`
  padding: 0;
  margin: 0;
  order: 1;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
`;

HeaderWrapper.RightSide = styled.div`
  padding: 0;
  margin: 0;
  order: 2;
  width: 100%;
  height: 100%;
`;

export default HeaderWrapper;
