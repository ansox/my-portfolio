import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const paragraph1 = css`
  ${({ theme }) => css`
    font-size: ${theme.typographyVariants.paragraph1.fontSize};
    font-weight: ${theme.typographyVariants.paragraph1.fontWeight};
    line-height: ${theme.typographyVariants.paragraph1.lineHeight};
  `}
`;

const title = css`
  ${({ theme }) => css`
    font-size: ${theme.typographyVariants.title.fontSize};
    font-weight: ${theme.typographyVariants.title.fontWeight};
    line-height: ${theme.typographyVariants.title.lineHeight};
 `}
`;

const mainTitle = css`
  ${({ theme }) => css`
    font-size: ${theme.typographyVariants.mainTitle.fontSize};
    font-weight: ${theme.typographyVariants.mainTitle.fontWeight};
    line-height: ${theme.typographyVariants.mainTitle.lineHeight};
 `}
`;

const subTitle = css`
  ${({ theme }) => css`
    font-size: ${theme.typographyVariants.subTitle.fontSize};
    font-weight: ${theme.typographyVariants.subTitle.fontWeight};
    line-height: ${theme.typographyVariants.subTitle.lineHeight};
 `}
`;

export const TextStyleVariantsMap = {
  paragraph1,
  title,
  mainTitle,
  subTitle,
};

const TextBase = styled.span`
  ${(props) => TextStyleVariantsMap[props.variant]}
`;

export default function Text({
  tag, variant, children, ...props
}) {
  return (
    <TextBase
      as={tag}
      variant={variant}
      {...props}
    >
      {children}
    </TextBase>
  );
}

Text.propTypes = {
  tag: PropTypes.string.isRequired,
  variant: PropTypes.string,
  children: PropTypes.node,
};

Text.defaultProps = {
  variant: 'paragraph1',
  children: null,
};
