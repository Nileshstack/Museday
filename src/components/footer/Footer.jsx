import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
const Footer = () => {
  return (
    <div className={styles.container}>
       <div>@2025 Museday. All rights reserved. </div>
    <div>
      <div className={styles.imageContainer}>
         <Image src="/1.png" width={20} className={styles.icon} height={20} alt='Lama Dev'/>
         <Image src="/2.png" width={20} className={styles.icon}  height={20} alt='Lama Dev'/>
         <Image src="/3.png" width={20} className={styles.icon}  height={20} alt='Lama Dev'/>
         <Image src="/4.png" width={20} className={styles.icon}  height={20} alt='Lama Dev'/>
      </div>
    </div>
    </div>
  )
}

export default Footer
