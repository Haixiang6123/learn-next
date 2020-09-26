import React from "react"
import styles from '../styles/Home.module.css'
import Link from "next/link"

const Home = () => {
  return (
    <div className={styles.container}>
      <Link href="/posts/first-post">第一篇文章</Link>
    </div>
  )
}

export default Home
