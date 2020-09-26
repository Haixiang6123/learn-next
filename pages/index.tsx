import React from "react"
import styles from '../styles/Home.module.scss'
import Link from "next/link"
import jpg from "assets/images/logo.jpg";

const Home = () => {
  return (
    <div className={styles.container}>
      <img src={jpg} alt="logo"/>
      <Link href="/posts/first-post">第一篇文章</Link>
    </div>
  )
}

export default Home
