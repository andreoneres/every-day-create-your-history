import Image from 'next/image';
import { Border } from '../border';
import { Button } from '../button';
import DownloadIconSvg from '../../assets/svg/download.svg';
import { Container, InfosContainer } from './styles';

function Home() {
  return (
    <Container>
      <InfosContainer>
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
        <Image src="/me.jpg" alt="My Image" width={256} height={290} className="image" />
      </InfosContainer>
      <div className="cv-button">
        <Button>
          Download CV <DownloadIconSvg />
        </Button>
      </div>
    </Container>
  );
}

export { Home };
