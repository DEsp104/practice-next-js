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
export const getServerSideProps = async (context) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);

  const article = await res.json();

  return {
    props: {
      article
    }
  }
}


export default article;