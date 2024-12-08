import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from 'styles/Header.module.css'
import classNames from 'classnames';

const HeaderLogged = () => {
  const username = localStorage.getItem('username');
  const logOut = () => {
    localStorage.removeItem('username');
    window.location.reload();
  }
  return (
    <div className={styles.headerContainer}>
      <header className={styles.header}>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold">
          <Link href="/">
              <Image className={styles.headerImage}
                src="/images/letterboxd-logo-h-pos-rgb-1000px-removebg-preview.png"
                alt="Letterboxd Logo"
                width={190}
                height={60} 
              />
            </Link>
          </div>

          <nav className={classNames(styles.navBar, "hidden md:flex space-x-5")}>
            <Link href="/" className={styles.navElement}>HOME</Link>
            <p className={styles.navElement}>WELCOME, {username}!</p>
            <Link href="/" onClick={logOut} className={styles.navElement}>LOGOUT</Link>
            <Link href="/films" className={styles.navElement}>MOVIES</Link>
          </nav>

          <div className="relative">
            <input
              type="text"
              placeholder="Search movies..."
              className={classNames(styles.searchBox, "bg-gray-800 text-white py-2 px-4 rounded-full focus:outline-none")}
            />
            <button className="absolute right-2 top-2 text-gray-400">
            <Image
              src="/images/search-btn-image.png" alt='Search-button'
              width={25}
              height={10}
              />
            </button>
          </div>
        </div>
      </header>
    </div>
    
  );
};

export default HeaderLogged;
