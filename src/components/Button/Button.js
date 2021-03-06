import React from 'react';
import s from './Button.module.css';
import PropTypes from 'prop-types';

export default function Button({ title }) {
  return (
    <button type="submit" className={s.button}>
      {title}
    </button>
  );
}

Button.propTypes = {
  title: PropTypes.string,
};
