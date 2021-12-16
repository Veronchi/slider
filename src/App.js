import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';

function App() {

  const personsData = data;
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      switchToNextPerson();
    }, 5000);
    return (
      () => {
        clearInterval(id);
      })

  }, [activeSlide])

  const switchToPrevPerson = () => {
    const personsDataLength = personsData.length - 1;

    if (activeSlide === 0) {
      setActiveSlide(personsDataLength);
    } else {
      setActiveSlide(activeSlide - 1);
    }
  }

  const switchToNextPerson = () => {
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
        {personsData.map((person, idx) => {
          const isActive = (idx === activeSlide) ? 'activeSlide' :
            (idx < activeSlide) ? 'lastSlide' :
              (idx > activeSlide) ? 'nextSlide' : '';

          return (
            <article key={`item${person.id}`} className={isActive}>
              <img src={person.image} alt={person.name} className='person-img' />
              <h4>{person.name}</h4>
              <p className='title'>{person.title}</p>
              <p className='text'>{person.quote}</p>
              <span className='icon'>
                <FaQuoteRight />
              </span>
            </article>
          );
        })}
        <button className='prev' onClick={() => switchToPrevPerson()}>
          <FiChevronLeft />
        </button>
        <button className='next' onClick={() => switchToNextPerson()}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
