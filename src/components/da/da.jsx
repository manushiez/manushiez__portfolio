import React from 'react';
import './da.css';
import da1 from '../../assets/da1.png';
import da2 from '../../assets/da2.png';
import da3 from '../../assets/da3.png';
import da4 from '../../assets/da4.png';
import da5 from '../../assets/da5.png';
import da6 from '../../assets/da6.png';
import da7 from '../../assets/da7.png';
import da8 from '../../assets/da8.png';
import da9 from '../../assets/da9.png';

const Da = () => {
  return (
    <section id="da" className='da'>
      <h5>My Digital Art</h5>
      <h2>Portfolio</h2>


      <div className="da__container">

        <div className='da__box'><img src={da1} /></div>
        <div className='da__box'><img src={da2} /></div>
        <div className='da__box'><img src={da3} /></div>
        <div className='da__box'><img src={da4} /></div>
        <div className='da__box'><img src={da6} /></div>
        <div className='da__box'><img src={da5} /></div>
        <div className='da__box'><img src={da7} /></div>
        <div className='da__box'><img src={da9} /></div>
        <div className='da__box'><img src={da8} /></div>
      </div>
    </section>
  );
};

export default Da;
