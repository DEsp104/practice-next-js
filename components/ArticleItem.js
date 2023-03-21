import Link from 'next/link'
import articleStyle from '../styles/Article.module.css';



const ArticleItem = ({article}) => {
  return (
    // linking each of the items
    // In the href, the link have a parameter of [id] to replace it with the id of the article using the 'as' attribute
    <Link href='/article/[id]' as={`/article/${article.id}`}>
      <span className={articleStyle.card}>
        <h3>{article.title} &rarr;</h3>
        <p>{article.body}</p>
      </span>
    </Link>
  )
}

export default ArticleItem;