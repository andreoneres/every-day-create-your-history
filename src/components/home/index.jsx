import Border from '@components/border';
import Button from '@components/button';
import DownloadIconSvg from '@assets/svg/download.svg';
import MainImage from '@assets/svg/mainImage.svg';
import { cvUrl } from '@constants/curriculum';

import * as Styled from './styles';

function Home() {
  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.Left>
          <Styled.Hello>
            <Border height={'5px'} width={'41px'} />
            <Styled.HelloText>Hello!</Styled.HelloText>
          </Styled.Hello>
          <Styled.Title>
            <Border height={'156px'} width={'16px'} color={'#C4C4C4'} />
            <Styled.TitleText>
              <Styled.TitleLight>I'M</Styled.TitleLight> ANDRÉ <br /> OLIVEIRA
            </Styled.TitleText>
          </Styled.Title>
          <Styled.Calling>
            <Styled.CallingText>Web Developer FullStack</Styled.CallingText>
          </Styled.Calling>
          <Button
            onClick={() => window.open(cvUrl, "_blank")}
          >
            Download CV <DownloadIconSvg />
          </Button>
        </Styled.Left>
        <Styled.Right>
          <MainImage />
        </Styled.Right>
      </Styled.Content>
    </Styled.Container>
  );
}

export default Home;
