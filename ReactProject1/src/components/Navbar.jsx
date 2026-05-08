import React from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <>
        <div className={styles.navigation}>
            <span className={styles.logo}>APE<span className={styles.logoX}>X</span></span>
            <div className={styles.navlinks}>
                <p>PROGRAMS</p>
                <p>TRAINERS</p>
                <p>PRICING</p>
                <p>CONTACT</p>
            </div>
            <button className={styles.btn_join}>JOIN NOW</button>
        </div>
        <hr style={{border:"none",borderBottom: "1px solid white",opacity: 0.2}} />
    </>
  )
}

export default Navbar