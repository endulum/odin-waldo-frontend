import { useState } from 'react';

import GuessControl from './components/GuessControl';
import WaldoMap from './components/WaldoMap';
import './styles/style.css';

export default function App() {
  const [coords, setCoords] = useState(null);
  const [charactersFound, setCharactersFound] = useState([]);
  // if null, the game hasn't started
  // if [], the game has started - record time of game start
  // if length is 4, the game has ended - record time of game end

  return (
    <>
      <header>
        <h1>Where&apos;s Waldo?</h1>
        <p>
          Scroll around the map and click on a character to locate them.
          <br />
          Can you find Waldo, Wilma, Odlaw, and the Wizard?
        </p>
      </header>
      {
        // could put a game start modal here?
      }
      <WaldoMap onCoordSet={setCoords} />
      {
        // could put a game end modal here?
      }
      <footer>
        {charactersFound.length < 4 ? (
          <p>
            Characters to find:
            {' '}
            {['Waldo', 'Wilma', 'Odlaw', 'The Wizard'].map((character, index) => {
              if (!charactersFound.includes(character.toLowerCase())) {
                return (
                  <b key={character}>
                    {character}
                    {index !== 3
                    && ', '}
                  </b>
                );
              } return '';
            })}
          </p>
        ) : (
          <p>
            <b>No characters left to find.</b>
          </p>
        )}

        <GuessControl
          currentCoords={coords}
          charactersFound={charactersFound}
          setCharactersFound={setCharactersFound}
        />
      </footer>
    </>
  );
}
