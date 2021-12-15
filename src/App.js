import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  return (
    <section className='section'>
      <div className='title'>
        <h2>
          <span>/</span>
          reviews
        </h2>
      </div>
      <div className='section-center'>
        <article className='activeSlide'>
          <img src='' alt='' className='person-img' />
          <h4>111</h4>
          <p>2222</p>
          <p>333</p>
          <span className='icon'>
            <FaQuoteRight />
          </span>
        </article>
        <button className='prev'>
          <FiChevronLeft />
        </button>
        <button className='next'>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
