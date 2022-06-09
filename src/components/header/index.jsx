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
    </Styled.Container>
  );
}

export { Header };
