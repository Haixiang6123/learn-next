import React from "react"
import styles from '../styles/Home.module.css'
import Link from "next/link"

export default function Home() {
  return (
    <div className={styles.container}>
      <Link href="/posts/first-post">第一篇文章</Link>
    </div>
  )
}
