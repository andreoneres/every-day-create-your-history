import { useState } from 'react';
import { useLanguageContext } from '../../contexts/language';

import { SwitchLanguage } from '../switchLanguages';
import { RenderIf } from '../renderIf';
import { Container } from './styles';

import HomeIconSvg from '../../assets/svg/home.svg';
import AboutIconSvg from '../../assets/svg/aboutMe.svg';
import ExperiencesIconSvg from '../../assets/svg/experiences.svg';
import CoursesIconSvg from '../../assets/svg/courses.svg';

function Header() {
  const[showSwitchLanguagues, setShowSwitchLanguagues] = useState(false);

  const context = useLanguageContext();

  return (
    <Container>
      <div className="logo">
        <span>Logo</span>
      </div>
      <div className="menu">
        <ul>
          <li>
            <a href="#">
              <HomeIconSvg />
              <span>Home</span>
              {/* <div className="bar-min"></div> */}
            </a>
          </li>
          <li>
            <a href="#">
              <AboutIconSvg />
              <span>About Me</span>
            </a>
          </li>
          <li>
            <a href="#">
              <ExperiencesIconSvg />
              <span>Experiences</span>
            </a>
          </li>
          <li>
            <a href="#">
              <CoursesIconSvg />
              <span>Courses</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="language">
        <div className="language-active">
          <button
            onClick={() => setShowSwitchLanguagues(!showSwitchLanguagues)}
          >
            {context.state.language}
          </button>
        </div>
        <RenderIf isTrue={showSwitchLanguagues}>
          <SwitchLanguage/>
        </RenderIf>
      </div>
    </Container>
  );
}

export { Header };
