import { useState } from 'react';

import HomeIconSvg from '@assets/svg/home.svg';
import AboutIconSvg from '@assets/svg/aboutMe.svg';
import ExperiencesIconSvg from '@assets/svg/experiences.svg';
import CoursesIconSvg from '@assets/svg/courses.svg';

import * as Styled from './styles';

function MenuMobile() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Styled.Container>
      <Styled.MenuButton onClick={() => setIsOpen(!isOpen)}>
        <Styled.MenuButtonLine />
        <Styled.MenuButtonLine />
        <Styled.MenuButtonLine />
      </Styled.MenuButton>
      <Styled.MenuContainer
        isOpen={isOpen}
      >
        <Styled.MenuList isOpen={isOpen}>
          <li>
            <a href="#">
              <HomeIconSvg />
              <span>Home</span>
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
        </Styled.MenuList>
      </Styled.MenuContainer>
    </Styled.Container>
  );
}

export default MenuMobile;
