import Head from 'next/head';
import { AppProps } from 'next/app';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/global';
import theme from '../styles/theme';

import Header from '../components/Header';
import SearchProvider from '../contexts/SearchContext';

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <Head>
      <title>BossaBox Front-End</title>
    </Head>
    <GlobalStyle />
    <SearchProvider>
      <Header />
      <Component {...pageProps} />
    </SearchProvider>
  </ThemeProvider>
);

export default App;
