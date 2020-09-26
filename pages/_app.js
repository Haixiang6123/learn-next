import React from "react"
import Head from "next/head"
import 'styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <Head>
        <title>我的博客</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>

      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
