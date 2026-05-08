import React from 'react'
import styles from './CtaBanner.module.css'
const ctaBanner = () => {
  return (
    <div>
        <p className={styles.ctaText}>TRAIN <span className={styles.harder}> HARDER</span><span className={styles.live}> LIVE </span>BETTER</p>
    </div>
  )
}

export default ctaBanner