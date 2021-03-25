//файл называется CharactersLis (без t)
import React from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types'
import { Character } from "../Character";

export const CharactersList = ({characters}) => {
  return (
    characters.map(character => (
      <Character
        key={shortid.generate()} // добавь id во все обьекты когда получаешь ответ с апи
        name={character.name}
        birthYear={character.birth_year}
      />
    ))
  )
}

CharactersList.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      birthYear: PropTypes.string.isRequired,
    })
  )
}
