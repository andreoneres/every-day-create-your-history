import { Border } from '../../border';
import Image from 'next/image';
import { Container } from './styles';

function Infos() {
  return (
    <Container>
      <div className="infos">
        <div>
          <Border height={'5px'} width={'41px'} />
          <span>Hello!</span>
        </div>
        <div>
          <Border height={'156px'} width={'16px'} color={'#C4C4C4'} />
          <h2>
            I'M
            <span>
              {' '}
              ANDRÉ <br /> OLIVEIRA
            </span>
          </h2>
        </div>
        <div>
          <span>Web Developer FullStack</span>
        </div>
      </div>
      <Image src="/src/assets/image/me.jpg" alt="My Image" width={300} height={300} />
    </Container>
  );
}

export { Infos };
