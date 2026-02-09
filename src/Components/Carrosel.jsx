import React from 'react'
import "/src/CSS/Carrossel.css";
import img1 from "/src/Assets/Apple.png";

function Carrosel() {
  return (
    <div className='carrossel-container'>
      <img
        src={img1}
        alt="Apple" className='carrossel-image'
      />
    </div>
  );
}

export default Carrosel
