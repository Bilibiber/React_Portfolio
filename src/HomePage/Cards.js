import React from 'react'
import CardItems from './CardItems'
import './Cards.css'


function Cards() {
    return (
        <div className="cards" id="demo">
            <h1>CHECK OUT ALL MY DEMOS</h1>
            <div className="cards-container">
                <div className="cards-wrapper">
                    <ul className="cards-items">
                        <CardItems
                            src="../images/CodePen.jpg"
                            text="A live web development editor, enabled HTML, CSS and JavaScript"
                            label="CodePen"
                            path="/codePen"
                        />
                        <CardItems
                            src="../images/amazon.jpg"
                            text="An amazon website colone"
                            label="Amazon"
                            path="/Amazon"
                        />
                        <CardItems
                            src="../images/formik_black.jpg"
                            text="React Formik"
                            label="Formik"
                            path="/formik"
                        />
                        <CardItems
                            src="../images/formik_black.jpg"
                            text="React Todo List"
                            label="Todo List"
                            path="/TodoList"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
