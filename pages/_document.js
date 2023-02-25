import { Html, Head, Main, NextScript } from 'next/document'

const fontStyle = {
  'font-family': 'Inter',
  'font-style': 'normal',
  'margin': 0,
  'height': '100vh'
}
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body style={fontStyle}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
