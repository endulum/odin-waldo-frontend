import { useRef } from 'react';

import ImgUrl from '../assets/waldo1.jpg';
// dimensions: 2444 * 1525

export default function WaldoMap({ onCoordSet }) {
  const crosshairRef = useRef();
  function getCoords(e) {
    const bounds = e.target.getBoundingClientRect();
    const x = e.pageX - bounds.left - window.scrollX;
    const y = e.pageY - bounds.top - window.scrollY;
    const clickX = (x / e.target.clientWidth) * e.target.naturalWidth;
    const clickY = (y / e.target.clientHeight) * e.target.naturalHeight;
    // console.log(clickX, clickY);
    crosshairRef.current.style.opacity = 1;
    crosshairRef.current.style.top = `${clickY - 25}px`;
    crosshairRef.current.style.left = `${clickX - 25}px`;
    onCoordSet({ x: clickX.toFixed(0), y: clickY.toFixed(0) });
  }

  return (
    <div className="waldo-map">
      <div className="crosshair" ref={crosshairRef} />
      <img
        onClick={getCoords}
        className="waldo-map-img"
        src={ImgUrl}
        alt="A Where's Waldo map."
      />
    </div>
  );
}
