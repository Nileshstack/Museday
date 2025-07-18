import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
const Portfolio = () => {
  return (
    <div>
      <div className={styles.container}>
        <h1 className={styles.selectTitle}> Chose a Gallery</h1>
        <div className={styles.items}>
          <Link className={styles.item} href='/portfolio/applications'>
          <span className={styles.title}>Application</span>
          </Link>
          <Link className={styles.item} href='/portfolio/illustrations'>
          <span className={styles.title}>Illustrations</span>
          </Link>
           <Link className={styles.item} href='/portfolio/websites'>
          <span className={styles.title}>Website</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
