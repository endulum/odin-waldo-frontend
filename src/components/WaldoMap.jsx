import ImgUrl from '../assets/waldo1.jpg';

export default function WaldoMap() {
  return (
    <div className="waldo-map">
      <img className="waldo-map-img" src={ImgUrl} alt="A Where's Waldo map." />
    </div>
  );
}
