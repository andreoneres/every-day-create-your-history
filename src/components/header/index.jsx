import { Container } from './styles';

import HomeIconSvg from '../../assets/svg/home.svg';
import AboutIconSvg from '../../assets/svg/aboutMe.svg';
import ExperiencesIconSvg from '../../assets/svg/experiences.svg';
import CoursesIconSvg from '../../assets/svg/courses.svg';

export const Header = () => {
  return (
    <Container className="header">
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
      <div className="language">Lingua</div>
    </Container>
  );
};
