import { useState } from 'react';
import propTypes from 'prop-types';
import { Container } from './styles';

export const SwitchLanguage = ({ language = 'Português' }) => {
  const [languageActive, setLanguageActive] = useState(language);

  return (
    <>
      <Container>
        <div className="language-selected">
          <div className="container">
            <span>{languageActive}</span>
          </div>
        </div>
        <ul>
          <li>
            <a
              href="#"
              onClick={() => {
                setLanguageActive('Português');
              }}
            >
              <span>Português</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => {
                setLanguageActive('Inglês');
              }}
            >
              <span>Inglês</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => {
                setLanguageActive('Espanhol');
              }}
            >
              <span>Espanhol</span>
            </a>
          </li>
        </ul>
      </Container>
    </>
  );
};

SwitchLanguage.propTypes = {
  language: propTypes.string,
};
