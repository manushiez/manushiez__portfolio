import React from 'react'
import './portfolio.css'
import img1 from '../../assets/project2.png'
import img2 from '../../assets/project3.png'


const portfolio = () => {
  return (
    <section id='portfolio' className='portfolio'>
      <h5>My Recent work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio_item'>
          <div className="portfolio__item-image">
            <img src={img1} alt="" />
          </div>

          <h3>Minimalist Introduction Website UI</h3>
          <p>Developed and deployed a responsive Portfolio website on Github, showcasing strong UI design skills and web development skills – React Native, Node.js, HTML, CSS, JavaScript,Github</p>

          <div className="portfolio__item-cta">
            <a href="https://github.com/manushiez/Manushiez.Intro" className='btn' target='_blank' rel='noreferrer' >Github</a>
            <a href="https://manushiez.github.io/Manushiez.Intro/" className='btn btn-primary' target='_blank' rel='noreferrer' >Live Demo</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio__item-image">
            <img src={img2} alt="" />
          </div>

          <h3>AutoFuelAI</h3>
          <p>Utilized 7+ diverse machine learning algorithms to optimize fuel efficiency predictions in the automotive sector, based on RMS and R-squared values. Contributed to sustainability using Python, NumPy, Pandas, Matplotlib, and Scikit-learn.</p>

          <div className="portfolio__item-cta">
            <a href="https://github.com/manushiez/AuroFuelAI" className='btn' target='_blank'>Github</a>
            <a href="https://colab.research.google.com/drive/1-0NciiaXU_ZAcW2nRhmNbUfA7J4yYufW?usp=sharing" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>


      </div>
    </section>
  )
}

export default portfolio