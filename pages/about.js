// import Head from "next/head";
import Meta from '../components/Meta'





const about = () => {
  return (
    <div>
      {/* <Head>
        <title>About</title>
      </Head> */}
      {/* We imported Meta to bypass the title default and give this page a unique title like 'About'. You can by pass description or keywords as well */}
       <Meta title='About' />
       <h1>About</h1>
    </div>
  )
}

export default about;

// route to /about on the browser to render this page