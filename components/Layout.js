import React, { Component } from 'react'
import Link from 'next/link'
import Head from 'next/head'

class Layout extends Component {
  render() {
    const { children, title } = this.props

    return (
      <div>
        <Head>
          <title>{title}</title>
          <meta name="viewport" content="initial-scale=1, width=device-width" key="viewport" />
        </Head>

        <header>
          <Link href="/">
            <a href="/">Podcasts</a>
          </Link>          
        </header>

        {
          children
        }

        <style jsx>
        {`
          header {
            color: #fff;
            background: #8756ca;
            padding: 15px;
            text-align: center;
          }
          header a {
            color: #fff;
            text-decoration: none;
          }
        `}
        </style>

        <style jsx global>
        {`
          body {
            margin: 0;
            font-family: system-ui;
            background: white;
          }
        `}
        </style>
      </div>
    )
  }
}

export default Layout