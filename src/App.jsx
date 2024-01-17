import { useState, useRef, useEffect } from 'react';

import WaldoMap from './components/WaldoMap';
import './styles/style.css';

export default function App() {
  const [coords, setCoords] = useState(null);
  const [charactersFound, setCharactersFound] = useState([]);
  const [loading, setLoading] = useState(false);
  const [correct, setCorrect] = useState(null);
  const characterSelect = useRef(null);

  useEffect(() => {
    if (coords !== null) { console.log(`Cursor placed on ${coords.x}, ${coords.y}`); }
  }, [coords]);

  return (
    <>
      <header>
        <h1>Where&apos;s Waldo?</h1>
      </header>
      <WaldoMap onCoordSet={setCoords} />
      <footer>
        <div>
          Scroll around the map and click on a character to locate them.
          <br />
          Can you find Waldo, Wilma, Odlaw, and the Wizard?
        </div>
        <div className="bottom-right">
          {charactersFound.length < 4 ? (
            <>
              {loading ? (
                <small>
                  Checking your guess...
                </small>
              ) : (
                <small>
                  {correct === true && 'Correct!'}
                  {correct === false && 'Nope, try again!'}
                </small>
              )}
              <div>
                <label htmlFor="found">
                  I found
                  {' '}
                  <select id="found" ref={characterSelect}>
                    {!charactersFound.includes('waldo') && <option value="waldo">Waldo</option>}
                    {!charactersFound.includes('wilma') && <option value="wilma">Wilma</option>}
                    {!charactersFound.includes('odlaw') && <option value="odlaw">Odlaw</option>}
                    {!charactersFound.includes('wizard') && <option value="wizard">The Wizard</option>}
                  </select>
                  {' '}
                  !
                </label>
                {' '}
                <button
                  disabled={loading}
                  type="button"
                  onClick={() => {
                    // fake win value
                    const win = true;
                    setLoading(true);
                    // timeouts "mock" latent response time
                    setTimeout(() => {
                      if (win) {
                        setCharactersFound([...charactersFound, characterSelect.current.value]);
                      }
                      setLoading(false);
                      setCorrect(win);
                      setTimeout(() => {
                        setCorrect(null);
                      }, 1000);
                    }, 1000);
                  }}
                >
                  Check
                </button>
              </div>
            </>
          ) : <p>You found all the characters!</p>}
        </div>
      </footer>
    </>
  );
}
