import React from 'react'
import CardItems from './CardItems'
import './Cards.css'

function Cards() {
  return (
    <div className='cards' id='demo'>
      <h1>CHECK OUT ALL MY DEMOS</h1>
      <div className='cards-container'>
        <div className='cards-wrapper'>
          <ul className='cards-items'>
            <CardItems
              src='../images/CodePen.jpg'
              text='A live web development editor, enabled HTML, CSS and JavaScript'
              label='CodePen'
              path='/codePen'
            />
            <CardItems
              src='../images/netflix-logo.png'
              text='An Netflix website colone'
              label='Netflix'
              path='/Netflix'
            />
            <CardItems src='../images/coming-soon5.png' text='Developing' label='E-Commerce' path='/ECommerce' />
            <CardItems src='../images/coming-soon5.png' text='Developing' label='Todo List' path='/MuiTodo' />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
