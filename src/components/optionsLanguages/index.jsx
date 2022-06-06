import PropTypes from 'prop-types';
import Link from 'next/link';
import { useLanguageContext } from '../../contexts/language';

OptionLanguage.propTypes = {
  language: PropTypes.string
}

function OptionLanguage({ language }) {

  const context = useLanguageContext();

  return (
    <li>
      <Link
        onClick={() => context.dispatch({ type: 'CHANGE', payload: language })}
      >
        {language}
      </Link>
    </li>
  );
}

export { OptionLanguage };