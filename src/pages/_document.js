import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r text-white pb-10 sm:pb-0'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
