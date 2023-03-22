// To retrieve the id
import { useRouter } from 'next/router';

const article = () => {
  // router contains parameters that are in the route ("/article/[id]") or path of the current page
  // get the id number of the route of the current article and assign it to variable id
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  console.log(router);
  const { id } = router.query;

  return (
    <div>
      This is an article {id}
    </div>
  )
}

export default article;