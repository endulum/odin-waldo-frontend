import WaldoMap from './components/WaldoMap';
import './styles/style.css';

export default function App() {
  return (
    <>
      <header>
        <h1>Where&apos;s Waldo?</h1>
      </header>
      <WaldoMap />
      <footer>
        <p>
          Scroll around the map and click on a character to locate them.
          <br />
          Can you find Waldo, Wilma, Odlaw, and the Wizard?
        </p>
      </footer>
    </>
  );
}
