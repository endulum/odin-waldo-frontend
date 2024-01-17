import { useState } from 'react';

import WaldoMap from './components/WaldoMap';
import './styles/style.css';

export default function App() {
  const [coords, setCoords] = useState(null);
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
        <div className="bottom-left">
          {coords ? (
            <small>
              Marker placed on
              {' '}
              {coords.x}
              ,
              {' '}
              {coords.y}
            </small>
          ) : (
            <small>
              No marker placed yet
            </small>
          )}
          <div>
            <label htmlFor="found">
              I found
              {' '}
              <select id="found">
                <option value="waldo">Waldo</option>
                <option value="wilma">Wilma</option>
                <option value="odlaw">Odlaw</option>
                <option value="wizard">The Wizard</option>
              </select>
              {' '}
              !
            </label>
            {' '}
            <button type="button">Check</button>
          </div>
        </div>
      </footer>
    </>
  );
}
