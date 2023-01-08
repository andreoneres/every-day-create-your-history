import PropTypes from 'prop-types';
import Footer from '@components/footer';
import Header from '@components/header';
import { SocialMedia } from '@components/socialMedia';

import * as Styled from './styles';

Layout.propTypes = {
  children: PropTypes.node,
};

function Layout({ children }) {
  return (
    <Styled.Container>
      <Header />
      <Styled.Main>
        {children}
      </Styled.Main>
      <Footer />
      <SocialMedia />
    </Styled.Container>
  );
}

export default Layout;
