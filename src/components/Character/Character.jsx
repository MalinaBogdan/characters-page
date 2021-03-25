import React from 'react';
import PropTypes from 'prop-types';
import { CommentBox } from "../CommentBox";
import './character.scss';

export const Character = ({name, birthYear}) => {
  return (
    <div className='main__character character'>
      <h2>Name: {name}</h2>
      <h3>Year of birth: {birthYear}</h3>
      <CommentBox />
    </div>
  )
}

Character.propTypes = {
  name: PropTypes.string.isRequired,
  birthYear: PropTypes.string.isRequired,
}
