import { server } from '../config';
// Head is use for custom title, meta tags, keywords or descriptions
// import Head from 'next/head';
import ArticleList from '../components/ArticleList';



export default function Home({ articles }) {
  return (
    <div>
      {/* <Head> 
        <title>WebDev Newz</title>
        <meta name="keywords" content="web developement, programming" />
      </Head> */}
      
      {/* Import the component containing the list of items. Pass an attribute 'articles' to pass the list of items to the ArticleList component */}
      <ArticleList articles={articles} />
    </div>
  )
}

// Fetch Data from third party api. We going to fetch data during build time
// res variable will receive the data from api
// article will turn the data into json
// return an object with props. props is also an object which will contain the data (article) from api
// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`);
//   const articles = await res.json();

//   return {
//     props: {
//       articles
//     }
//   }
// }


// We going to make a fetch request from the api we created in the 'api' directory
// we need to add the api as absolute path
// server is being exported from the config directory
export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();

  return {
    props: {
      articles
    }
  }
}