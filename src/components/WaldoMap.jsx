import ImgUrl from '../assets/waldo1.jpg';
// dimensions: 2444 * 1525

export default function WaldoMap() {
  function getCoords(e) {
    const bounds = e.target.getBoundingClientRect();
    const x = e.pageX - bounds.left - window.scrollX;
    const y = e.pageY - bounds.top - window.scrollY;
    const clickX = (x / e.target.clientWidth) * e.target.naturalWidth;
    const clickY = (y / e.target.clientHeight) * e.target.naturalHeight;
    console.log(clickX, clickY);
  }

  return (
    <div className="waldo-map">
      <img
        onClick={getCoords}
        className="waldo-map-img"
        src={ImgUrl}
        alt="A Where's Waldo map."
      />
    </div>
  );
}
