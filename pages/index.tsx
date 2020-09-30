import React from "react"
import styles from '../styles/Home.module.scss'
import Link from "next/link"
import jpg from "assets/images/logo.jpg";
import {GetServerSideProps, NextPage} from 'next'
import { UAParser } from 'ua-parser-js';

interface IProps {
  browser: {
    name: string
    version: string
    major: string
  }
}

const Home: NextPage<IProps> = (props) => {
  const {browser} = props

  return (
    <div className={styles.container}>
      <img src={jpg} alt="logo"/>
      <Link href="/posts/first-post">第一篇文章</Link>
      <div>你的浏览器是</div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const ua = context.req.headers['user-agent']
  const result = new UAParser(ua).getResult()
  return {
    props: {
      browser: result.browser
    }
  }
}

export default Home
