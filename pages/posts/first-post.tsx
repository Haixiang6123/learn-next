import React from "react"
import styles from 'styles/first-post.module.scss'
import jpg from 'assets/images/logo.jpg';

const FirstPost = () => {
  return (
    <div className={styles.wrapper}>
      <img src={jpg} alt="logo"/>
      <div className={styles.wrapper}>content</div>
    </div>
  )
}

export default FirstPost
