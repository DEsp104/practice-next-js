// Head is use for custom title, meta tags, keywords or descriptions
import Head from 'next/head';


export default function Home() {
  return (
    <div>
      <Head> 
        <title>WebDev Newz</title>
        <meta name="keywords" content="web developement, programming" />
      </Head>
       <h1>Welcome to Next</h1>
    </div>
  )
}
