import Image from 'next/image';
import { Border } from '../border';
import { Button } from '../button';
import { SocialMedia } from '../socialMedia';
import DownloadIconSvg from '../../assets/svg/download.svg';
import * as Styled from './styles';

function Home() {
  return (
    <Styled.Container>
      <Styled.InfosContainer>
        <div className="infos">
          <div className="hello">
            <Border height={'5px'} width={'41px'} />
            <span>Hello!</span>
          </div>
          <div className="name">
            <Border height={'156px'} width={'16px'} color={'#C4C4C4'} />
            <h2>
              I'M
              <span>
                {' '}
                ANDRÉ <br /> OLIVEIRA
              </span>
            </h2>
          </div>
          <div className="calling">
            <span>Web Developer Full Stack</span>
          </div>
        </div>
        <Image src="/me.jpg" alt="My Image" width={300} height={318} className="image" />
      </Styled.InfosContainer>
      <div className="cv-button">
        <Button>
          Download CV <DownloadIconSvg />
        </Button>
      </div>
      <SocialMedia />
    </Styled.Container>
  );
}

export { Home };
