import { Infos } from "./infos";
import { Button } from '../button';
import { Container } from './styles';

function Presentation() {
  return (
    <Container>
      <Infos/>
      <div>
        <Button>Download CV</Button>
      </div>
    </Container>
  );
}

export { Presentation };
