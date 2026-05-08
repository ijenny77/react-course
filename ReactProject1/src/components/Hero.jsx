import React from 'react'
import {Link} from 'react-router-dom'
import CtaBanner from './CtaBanner'
import styles from './Hero.module.css'
const Hero = () => {
  return (
    <>
      <CtaBanner/>
      <div className={styles.mainDivHero}>
        <p className={styles.paragraph}>Kigali's most results-driven fitness studio. Science-backed <br /> programs, elite coaching, and a community that pushes <br /> you past every limit you thought you had.</p>
        <div className={styles.heroBoxes}>
          <p className={styles.heroNumbers}>2,4000+</p>
          <p className={styles.heroWords}>ACTIVE MEMBERS</p>
        </div>
        <div className={styles.heroBoxes}>
          <p className={styles.heroNumbers}>18</p>
          <p className={styles.heroWords}>EXPERT TRAINERS</p>
        </div>
        <div className={styles.heroBoxes}>
          <p className={styles.heroNumbers}>96%</p>
          <p className={styles.heroWords}>GOAL ACHIEVEMENT</p>
        </div>
        <div className={styles.heroBoxes}>
          <p className={styles.heroNumbers}>5⭐</p>
          <p className={styles.heroWords}>AVG. RATING</p>
        </div>
        <div className={styles.buttons}>
          <button className={styles.startFree}>START FREE TRIAL</button>
          <Link to='/programs' className={styles.seePrograms}>SEE PROGRAMS</Link>
        </div>
      </div>
    </>
  )
}


export default Hero