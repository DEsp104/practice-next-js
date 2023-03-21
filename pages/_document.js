// this file render in the server and not a good idea to touch it. We bringing in the Document component which contains the HTML, Head, Main, and NextScript. We can introduce attributes as props to HTML or any element available in this file. If you want to add meta tags it would be good to add it to the index.js inside the Head element
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}