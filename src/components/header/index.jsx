import { Menu } from '../menu';

import * as Styled from './styles';
import Image from 'next/image';


function Header() {
  return (
    <Styled.Container>
      <div className="logo">
      <Image src="/favicon.ico" alt="My Image" width={40} height={40} />
      </div>
      <Menu />
    </Styled.Container>
  );
}

export { Header };
