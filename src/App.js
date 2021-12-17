import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';

function App() {
  const [personsData, setPersonsData] = useState(data);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      switchToNextSlide();
    }, 5000);
    return (
      () => {
        clearInterval(slider);
      })

  }, [activeSlide])

  const switchToPrevSlide = () => {
    const personsDataLength = personsData.length - 1;

    if (activeSlide === 0) {
      setActiveSlide(personsDataLength);
    } else {
      setActiveSlide(activeSlide - 1);
    }
  }

  const switchToNextSlide = () => {
    const personsDataLength = personsData.length - 1;

    if (activeSlide < personsDataLength) {
      setActiveSlide(activeSlide + 1);
    } else {
      setActiveSlide(0);
    }
  }

  return (
    <section className='section'>
      <div className='title'>
        <h2>
          <span>/</span>
          reviews
        </h2>
      </div>
      <div className='section-center'>
        {personsData.map(({ id, image, name, title, quote }, personId) => {
          let position = 'nextSlide';

          if (personId === activeSlide) {
            position = 'activeSlide';
          }
          if (
            personId === activeSlide - 1 ||
            (activeSlide === 0 && personId === personsData.length - 1)
          ) {
            position = 'lastSlide';
          }

          return (
            <article key={`item${id}`} className={position}>
              <img src={image} alt={name} className='person-img' />
              <h4>{name}</h4>
              <p className='title'>{title}</p>
              <p className='text'>{quote}</p>
              <span className='icon'>
                <FaQuoteRight />
              </span>
            </article>
          );
        })}
        <button className='prev' onClick={switchToPrevSlide}>
          <FiChevronLeft />
        </button>
        <button className='next' onClick={switchToNextSlide}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
