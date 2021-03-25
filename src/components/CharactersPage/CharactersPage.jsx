import { useState, useEffect } from 'react';
import { CharactersList } from "../CharactersList";
import { getCharacters } from "../../api";
import './charactersPage.scss';

export const CharactersPage = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters()
      .then(characters => setCharacters(characters.results))
  }, [])

  return (
    <section className='main'>
      <CharactersList
        characters={characters}
      />
    </section>
  )
}
