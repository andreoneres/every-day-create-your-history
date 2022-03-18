import propTypes from 'prop-types'

import GlobalStyle from '../styles/global'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle/>
      <Component {...pageProps} />
    </>
  )
}

MyApp.propTypes = {
  Component: propTypes.func,
  pageProps: propTypes.object
}

export default MyApp
