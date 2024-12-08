"use client";
import React, {useState, useEffect} from 'react';
import styles from 'styles/MovieCard.module.css'
import Image from 'next/image';
import Link from 'next/link';

const MovieCard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const username = localStorage.getItem('username');
        setIsLoggedIn(!!username);
    }, [])
  return (
    <div className={styles.mainCard}>
      <div className={styles.container}>

        <Image className={styles.imageStyle} src="/images/skyfall-img.jpg" alt='skyfall' width={500} height={200} unoptimized/>

        <div className={styles.textOverlay}>
          <h1>Track films you've watched.</h1>
          <h1>Save those you want to see.</h1>
          <h1>Tell your friends what's good.</h1>
          {isLoggedIn ?  null : <Link href="/signup">
            <button className={styles.ctaButton}>Get started — it's free!</button>
          </Link>}
          
          <br/><br/><br />
          <div className={styles.socialNetwork}>
            <p className='text-lg'>The social network for film lovers. Also available on </p><br />
            <div className={styles.appleAndroid}>
              <Image src="images/android-img.png" alt="Android Icon" width={50} height={50} unoptimized />
              <Image src="images/apple-img.png" alt="Apple Icon" width={50} height={50} unoptimized />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
