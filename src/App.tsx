import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './config/theme';

import GlobalStyles from './lib/styles/global-styles';

import Routes from './routes';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
};
export default App;
