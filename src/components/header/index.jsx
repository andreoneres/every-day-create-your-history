import { useState } from 'react';
import { useLanguageContext } from '../../contexts/language';

import { SwitchLanguage } from '../switchLanguages';
import { RenderIf } from '../renderIf';
import { Menu } from '../menu';

import * as Styled from './styles';


function Header() {
  const [showSwitchLanguagues, setShowSwitchLanguagues] = useState(false);

  const context = useLanguageContext();

  return (
    <Styled.Container>
      <div className="logo">
        <span>Logo</span>
      </div>
      <Menu />
      <div className="language">
        <div className="language-active">
          <button onClick={() => setShowSwitchLanguagues(!showSwitchLanguagues)}>{context.state.language}</button>
        </div>
        <RenderIf isTrue={showSwitchLanguagues}>
          <SwitchLanguage />
        </RenderIf>
      </div>
    </Styled.Container>
  );
}

export { Header };
