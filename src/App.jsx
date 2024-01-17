import { useState, useRef, useEffect } from 'react';

import GuessControl from './components/GuessControl';
import WaldoMap from './components/WaldoMap';
import './styles/style.css';

export default function App() {
  const [coords, setCoords] = useState(null);
  const [charactersFound, setCharactersFound] = useState([]);
  // if null, the game hasn't started
  // if [], the game has started - record time of game start
  // if length is 4, the game has ended - record time of game end

  useEffect(() => {
    if (coords !== null) { console.log(`Cursor placed on ${coords.x}, ${coords.y}`); }
  }, [coords]);

  return (
    <>
      <header>
        <h1>Where&apos;s Waldo?</h1>
      </header>
      {
        // could put a game start modal here?
      }
      <WaldoMap onCoordSet={setCoords} />
      {
        // could put a game end modal here?
      }
      <footer>
        <div>
          Scroll around the map and click on a character to locate them.
          <br />
          Can you find Waldo, Wilma, Odlaw, and the Wizard?
          {
            // todo: move this text to header, reserve this space for "Characters left to find: ..."
          }
        </div>
        <GuessControl
          charactersFound={charactersFound}
          setCharactersFound={setCharactersFound}
        />
      </footer>
    </>
  );
}
