import HomeIconSvg from '@assets/svg/home.svg';
import AboutIconSvg from '@assets/svg/aboutMe.svg';
import ExperiencesIconSvg from '@assets/svg/experiences.svg';
import CoursesIconSvg from '@assets/svg/courses.svg';

import * as Styled from './styles';

function Menu() {
  return (
    <Styled.Container>
      <Styled.MenuList>
        <Styled.MenuItem>
          <a href="#">
            <HomeIconSvg />
            <span>Home</span>
          </a>
          <div className="bar-min"></div>
        </Styled.MenuItem>
        <Styled.MenuItem>
          <a href="#">
            <AboutIconSvg />
            <span>About Me</span>
          </a>
          <div className="bar-min"></div>
        </Styled.MenuItem>
        <Styled.MenuItem>
          <a href="#">
            <ExperiencesIconSvg />
            <span>Experiences</span>
          </a>
          <div className="bar-min"></div>
        </Styled.MenuItem>
        <Styled.MenuItem>
          <a href="#">
            <CoursesIconSvg />
            <span>Courses</span>
          </a>
          <div className="bar-min"></div>
        </Styled.MenuItem>
      </Styled.MenuList>
    </Styled.Container>
  );
}

export default Menu;
