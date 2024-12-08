import React from 'react';
import styles from 'styles/Footer.module.css';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className={styles.container}>
      <footer className="bg-gray-750 text-gray-300 py-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold text-white">Letterboxd</h2>
            <p className="text-sm">Discover, Rate, and Share Your Favorite Movies</p>
          </div>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://facebook.com" className={styles.mediaLinks} target="_blank" rel="noopener noreferrer">
              <Image src="/images/facebook.png" alt="Facebook"  width={35} height={35} unoptimized />
            </a>
            <a href="https://twitter.com" className={styles.mediaLinks} target="_blank" rel="noopener noreferrer">
              <Image src="/images/twitter.png" alt="Twitter"  width={38} height={35} unoptimized />
            </a>
            <a href="https://instagram.com" className={styles.mediaLinks} target="_blank" rel="noopener noreferrer">
              <Image src="/images/instagram.png" alt="Instagram"  width={35} height={35} unoptimized />
            </a>
          </div>
        </div>

        <div className="mt- text-center text-sm text-gray-400">
          &copy; 2024 Letterboxd. Made by Dattanand U D. All rights reserved.
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer
