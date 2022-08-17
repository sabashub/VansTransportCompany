import React from 'react'
import bmw from '../../assets/BMW_logo_(gray).svg.png';
import mercedes from '../../assets/mercedes.png';
import porche from '../../assets/Porsche-Logo.png';
import audi from '../../assets/Audi-Logo_2016.svg.png';
import opel from '../../assets/opel.png';

import './Brand.css';

const Brand = () => (
  <div className="gpt3__brand">
    <div >
      <img  className='porsche' src={porche} />
    </div>
    <div >
      <img className='mercedes' src={mercedes} />
    </div>
    <div >
      <img className='bmw' src={bmw} />
    </div>
    <div >
      <img className='audi' src={audi} />
    </div>
    <div>
      <img className='opel ' src={opel} />
    </div>
  </div>
);

export default Brand;