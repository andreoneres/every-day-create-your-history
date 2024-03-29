import LinkedinIconSvg from '@assets/svg/linkedin.svg';
import FacebookIconSvg from '@assets/svg/facebook.svg';
import InstagramIconSvg from '@assets/svg/instagram.svg';
import GitHubIconSvg from '@assets/svg/github.svg';
import * as Styled from './styles';

function SocialMedia() {
  return (
    <Styled.Container>
      <ul>
        <li>
          <a href="https://github.com/andreoneres" target="_blank" rel="noreferrer">
            <GitHubIconSvg />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/andreoneres" target="_blank" rel="noreferrer">
            <LinkedinIconSvg />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/andreoneres" target="_blank" rel="noreferrer">
            <FacebookIconSvg />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/andreoneres" target="_blank" rel="noreferrer">
            <InstagramIconSvg />
          </a>
        </li>
      </ul>
    </Styled.Container>
  );
}

export { SocialMedia };
