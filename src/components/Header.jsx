import React from 'react'
import classes from './Header.module.scss'
const Header = () => {
  return (
    <section className={classes.header}>
        <div className={classes.headerContent}>
            <h1>Your Trusted Travel Partner for All Journeys</h1>
            <p>From Hajj and Umrah to unforgettable vacations, Rovana Tours makes every trip seamless, affordable, and memorable.</p>
        </div>
    </section>
  )
}

export default Header