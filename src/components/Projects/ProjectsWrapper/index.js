import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../theme/utils/breakpointMedia';

const ProjectsWrapper = styled.div`
  width:100%;


   ${breakpointsMedia({
    xs: css`
      display: flex;
      flex-direction: column;
      align-items: center;
     `,
    md: css`
      display: block;
     `,
  })}
  
`;

export default ProjectsWrapper;
