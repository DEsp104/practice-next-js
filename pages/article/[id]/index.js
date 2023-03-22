import Link from 'next/link';
// To retrieve the id
import { useRouter } from 'next/router';

// pass in the article prop coming from the getServerSideProps()
const article = ({article}) => {
  // router contains parameters that are in the route ("/article/[id]") or path of the current page
  // get the id number of the route of the current article and assign it to variable id
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const router = useRouter();
  // console.log(router);
  // const { id } = router.query;

  return (
    <>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href='/'>Go back</Link>
    </>
  )
}

// fetch data at the time of request rather than get static props at build time
// pass in the context parameter to the getServerSideProps() which allows to get the id thats on the url
// make fetch req to the api and assign the api response to the 'article' variable
// export const getServerSideProps = async (context) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);

//   const article = await res.json();

//   return {
//     props: {
//       article
//     }
//   }
// }

// Fetch Data from third party api. We going to fetch data during build time
// res variable will receive the data from api
// article will turn the data into json
// return an object with props. props is also an object which will contain the data (article) from api
// getStaticProps() & getStaticPaths() are going to dynamically generate the path with the data
export const getStaticProps = async (context) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);

  const article = await res.json();

  return {
    props: {
      article
    }
  }
}

// benefit of this it will fetch data much faster at build time
// we're getting all the posts from the api
// getStaticPaths will generate all the paths for all the article in the api thus making the data available already, statically
export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const articles = await res.json();

  // return an array of article ids only
  const ids = articles.map(article => article.id);

  // map the ids and for each id return an object with param and inside param there should be another object containing id in the form of string
  // the variable 'paths' should contain the following as an example =>  {params: {id: '1', id: '2', id: '3',........}}
  const paths = ids.map(id => ({ params: { id: id.toString() } }));

  
  // take the data return from api, which is an array, and pass into the paths containing the params
  // fallback false will give a 404 page if something in the fetched data doesnt exist
  return {
    paths,
    fallback: false
  }
}



export default article;