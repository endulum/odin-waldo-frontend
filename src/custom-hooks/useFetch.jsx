/* eslint-disable no-console */
import { useEffect, useState } from 'react';

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [waiting, setWaiting] = useState(false);
  const [error, setError] = useState(null);

  async function fetchData(payload) {
    setData(null);
    setWaiting(true);
    setError(null);
    try {
      const response = await fetch(url, payload);

      // non-200 status codes will throw here
      if (!response.ok) {
        const text = await response.text();
        const errorString = `Request failed with status code ${response.status}${text && text.charAt(0) !== '<' ? `: ${text}` : '.'}`;
        throw new Error(errorString);
      }

      const responseJSON = await response.json();
      setData(responseJSON);
    } catch (e) {
      console.error(e);
      // account for non-status errors here - should add more i think...
      if (e instanceof TypeError) {
        setError('A network error occurred.');
      } else {
        setError(e.message);
      }
    }
    setWaiting(false);
  }

  useEffect(() => console.log(JSON.stringify(data)), [data]);

  return {
    data, waiting, error, fetchData,
  };
}
