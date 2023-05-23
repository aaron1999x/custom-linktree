import React from 'react'
import Head from 'next/head'

const MetaHead = () => {
  return (
    <Head>
      <title>Aaron&apos;s Linktree</title>
      {/* <!-- Primary Meta Tags --> */}
      <meta name="title" content="Aaron's Linktree"/>
      <meta name="description" content="Hi, im Aaron, a front-end developer, F1 fan and love collecting watches. Here are my links."/>

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website"/>
      <meta property="og:url" content="https://aaron-linktree.vercel.app/"/>
      <meta property="og:title" content="Aaron's Portfolio"/>
      <meta property="og:description" content="Hi, im Aaron, a front-end developer, F1 fan and love collecting watches. Here are my links."/>
      <meta property="og:image" content="https://aaron-linktree.vercel.app/_next/image?url=https%3A%2F%2Fmedia.licdn.com%2Fdms%2Fimage%2FD5603AQF9uAZAzZSRHw%2Fprofile-displayphoto-shrink_800_800%2F0%2F1664780321247%3Fe%3D1687392000%26v%3Dbeta%26t%3Dh9PXNCGmQpXPX1_dhsOi9YDohYOeo1IWfdAzG-mN6o4&w=96&q=75"/>

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image"/>
      <meta property="twitter:url" content="https://aaron-linktree.vercel.app/"/>
      <meta property="twitter:title" content="Aaron's Portfolio"/>
      <meta property="twitter:description" content="Hi, im Aaron, a front-end developer, F1 fan and love collecting watches. Here are my links."/>
      <meta property="twitter:image" content="https://aaron-linktree.vercel.app/_next/image?url=https%3A%2F%2Fmedia.licdn.com%2Fdms%2Fimage%2FD5603AQF9uAZAzZSRHw%2Fprofile-displayphoto-shrink_800_800%2F0%2F1664780321247%3Fe%3D1687392000%26v%3Dbeta%26t%3Dh9PXNCGmQpXPX1_dhsOi9YDohYOeo1IWfdAzG-mN6o4&w=96&q=75"/>
    </Head>
  )
}

export default MetaHead