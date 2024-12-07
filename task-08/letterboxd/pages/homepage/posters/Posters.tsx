import React from 'react';
import styles from 'styles/Posters.module.css';
import Image from 'next/image';

const Posters = () => {
  return (
    <div className={styles.posterContainer}>
      <div className={styles.posterHolder}>
        <Image className={styles.imageContent} 
        src="/images/fastfive.jpg" 
        alt='Fast Five' 
        width={30} 
        height={50} 
        unoptimized/>

        <Image className={styles.imageContent} 
        src="/images/harrypotter.jpg" 
        alt='Harry Potter' 
        width={30} 
        height={50} 
        unoptimized/>

        <Image className={styles.imageContent} 
        src="/images/missionImpossible.png" 
        alt='Mission Impossible' 
        width={30} 
        height={50} 
        unoptimized/>

        <Image className={styles.imageContent} 
        src="/images/interstellar.png" 
        alt='Interstellar' 
        width={30} 
        height={50} 
        unoptimized/>

        <Image className={styles.imageContent} 
        src="/images/inceptiion.jpg" 
        alt='Inception' 
        width={30} 
        height={50} 
        unoptimized/>

        <Image className={styles.imageContent} 
        src="/images/avengers.jpg" 
        alt='Avengers' 
        width={30} 
        height={50} 
        unoptimized/>
      </div>
    </div>
  )
}

export default Posters
