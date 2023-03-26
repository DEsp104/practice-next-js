// Head is use for custom title, meta tags, keywords or descriptions
import Head from 'next/head'


//Intead of adding the Head meta (title of the page, keywords for SEO) on every page, we created a Head component to apply the meta data info to every page available
const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      {/* viewport for responsiveness */}
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      {/* SEO purpose */}
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/flavicon.ico' />
      <title>{title}</title>
    </Head>
  )
}

// Default value added to Meta in case title/keyword/description isn't being provided
Meta.defaultProps = {
  title: 'WebDev Newz',
  keywords: 'web development, programming',
  description: 'Get the latest news in web dev,'
}

export default Meta