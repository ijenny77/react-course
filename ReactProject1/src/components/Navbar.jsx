import React from 'react'
import styles from './Navbar.module.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{position: 'sticky',top: 0,backgroundColor: 'rgba(0, 0, 0, 0.4)',backdropFilter: "blur(12px)"}}>
        <div className={styles.navigation}>
            <span className={styles.logo}>APE<span className={styles.logoX}>X</span></span>
            <div className={styles.navlinks}>
              <Link className={styles.link} to='/programs'>PROGRAMS</Link>
              <Link className={styles.link} to='/Trainers'>TRAINERS</Link>
              <Link className={styles.link} to='/Pricing'>PRICING</Link>
              <Link className={styles.link} to='/Contact'>CONTACT</Link>
            </div>
            <button className={styles.btn_join}>JOIN NOW</button>
        </div>
        <hr style={{border:"none",borderBottom: "1px solid white",opacity: 0.2,marginTop:0}} />
    </div>
  )
}

export default Navbar