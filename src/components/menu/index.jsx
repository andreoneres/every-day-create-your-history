import HomeIconSvg from '@assets/svg/home.svg';
import AboutIconSvg from '@assets/svg/aboutMe.svg';
import ExperiencesIconSvg from '@assets/svg/experiences.svg';
import CoursesIconSvg from '@assets/svg/courses.svg';

import * as Styled from './styles';

function Menu() {
  return (
    <Styled.Container>
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
    </Styled.Container>
  );
}

export default Menu;
