import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import Head from 'next/head';
import GlobalStyle from '../src/theme/GlobalStyle';
import theme from '../src/theme';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>My portfolio</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Sans&family=Fira+Sans+Condensed:wght@300;400;700&display=swap" rel="stylesheet" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired,
};
