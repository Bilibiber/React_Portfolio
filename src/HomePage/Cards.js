import React from 'react';
import CardItems from './CardItems';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>CHECK OUT ALL MY DEMOS</h1>
      <div className='cards-container'>
        <div className='cards-wrapper'>
          <ul className='cards-items' id='demo'>
            <CardItems
              src='../images/netflix-logo.png'
              text='An Netflix website colone'
              label='Netflix'
              path='/Netflix'
            />
            <CardItems
              src='../images/pikachu.jpg'
              text='Pokemon fan? Check this out'
              label='Pokemon List'
              path='/Pokemon'
            />
          </ul>
          <ul className='cards-items'>
            <CardItems
              src='../images/CodePen.jpg'
              text='A live web development editor, enabled HTML, CSS and JavaScript'
              label='CodePen'
              path='/codePen'
            />
            <CardItems
              src='../images/coming-soon5.png'
              label='KuaKuaAI'
              text=' having a rough day? Come here to relax'
              path='/ECommerce'
            />
            <CardItems
              src='../images/coming-soon5.png'
              text='Developing'
              label='E-Commerce'
              path='/myshop'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
