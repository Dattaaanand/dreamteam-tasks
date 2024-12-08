import React from 'react'
import styles from 'styles/Grid.module.css'
import classNames from 'classnames'

const Grid = () => {
  return (
    <div className={styles.mainContainer}>
      <p className={classNames(styles.gridText, 'text-lg')}>LETTERBOXD Lets You...</p>
      <div className={styles.gridContainer}>
        <div className={styles.gridHolder}>
            <div className={styles.gridContent}>
              <div className={styles.icon}>👁️</div>
              <p>Keep track of every film you've ever watched (or just start from the day you join)</p>
            </div>
            <div className={styles.gridContent}>
              <div className={styles.icon}>❤️</div>
              <p>Show some love for your favorite films, lists, and reviews with a “like”</p>
            </div>
            <div className={styles.gridContent}>
              <div className={styles.icon}>📝</div>
              <p>Write and share reviews, and follow friends and other members to read theirs</p>
            </div>
            <div className={styles.gridContent}>
              <div className={styles.icon}>⭐</div>
              <p>Rate each film on a five-star scale (with halves) to record and share your reaction</p>
            </div>
            <div className={styles.gridContent}>
              <div className={styles.icon}>📅</div>
              <p>Keep a diary of your film watching (and upgrade to Pro for comprehensive stats)</p>
            </div>
            <div className={styles.gridContent}>
              <div className={styles.icon}>🗂️</div>
              <p>Compile and share lists of films on any topic and keep a watchlist of films to see</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Grid
