/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from 'react';
import useFetch from '../custom-hooks/useFetch';

export default function GuessControl({
  currentCoords,
  charactersFound,
  setCharactersFound,
}) {
  const [responseMsg, setResponseMsg] = useState(null);
  const characterSelect = useRef(null);

  const {
    data, waiting, error, fetchData,
  } = useFetch('http://localhost:3000/maps/1');

  useEffect(() => {
    setResponseMsg(null);
    if (data !== null) {
      if ('isCorrect' in data) {
        if (data.isCorrect === true) {
          if (charactersFound.includes(characterSelect.current?.value)) {
            setResponseMsg('You already found this character.');
          } else {
            setResponseMsg('Correct!');
            setCharactersFound([...charactersFound, characterSelect.current?.value]);
          }
        } else {
          setResponseMsg('Nope, try again!');
        }
      } else if ('errors' in data) {
        if (data.errors[0].path === 'character') {
          setResponseMsg('This character doesn\'t exist in this map.');
        } else setResponseMsg('Please select a place on the map.');
      }
    }
  }, [data]);

  return (
    <div className="bottom-right">
      {charactersFound.length < 4 ? (
        <>
          {waiting ? (
            <small>
              Checking your guess...
            </small>
          ) : (
            <small>
              {responseMsg && responseMsg}
              {error && error}
            </small>
          )}
          <div>
            <label htmlFor="found">
              I found
              {' '}
              <select id="found" ref={characterSelect}>
                {!charactersFound.includes('Waldo') && <option value="Waldo">Waldo</option>}
                {!charactersFound.includes('Wilma') && <option value="Wilma">Wilma</option>}
                {!charactersFound.includes('Odlaw') && <option value="Odlaw">Odlaw</option>}
                {!charactersFound.includes('Wizard') && <option value="wizard">The Wizard</option>}
              </select>
              {' '}
              !
            </label>
            {' '}
            <button
              disabled={waiting}
              type="button"
              onClick={() => {
                fetchData({
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    x: currentCoords?.x,
                    y: currentCoords?.y,
                    character: characterSelect.current.value,
                  }),
                });
              }}
            >
              Check
            </button>
          </div>
          {currentCoords === null ? (
            <small>
              Map placement not made yet
            </small>
          ) : (
            <small>
              Placement currently at
              {' '}
              <b>{currentCoords.x}</b>
              ,
              {' '}
              <b>{currentCoords.y}</b>
            </small>
          )}
        </>
      ) : <p>You found all the characters!</p>}
    </div>
  );
}
