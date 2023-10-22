import React from 'react';
import CV from '../../assets/Manushi_Tyagi_CV.pdf';

const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} target='_blank' rel='noreferrer' className='btn btn-sm rounded-full'>View CV</a>
      <a href='#contact' className='btn btn-sm btn-primary rounded-full'>Let's Connect</a>
    </div>
  );
};

export default CTA;
