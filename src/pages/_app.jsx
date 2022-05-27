import propTypes from 'prop-types';

import { LanguageContext } from '../contexts/language';

import GlobalStyle from '../styles/global';

MyApp.propTypes = {
  Component: propTypes.func,
  pageProps: propTypes.object,
  router: propTypes.object
}
function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <GlobalStyle/>
      <LanguageContext>
        <Component {...pageProps} key={router.route} />
      </LanguageContext>
    </>
  )
}

export default MyApp;
