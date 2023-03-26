import Link from 'next/link'
import articleStyle from '../styles/Article.module.css';



const ArticleItem = ({article}) => {
  return (
    // linking each of the items
    // In the href, the link have a parameter of [id] to replace it with the id of the article using the 'as' attribute
    // In the 'pages' directory, we created a folder name 'article/[id]' to replace the 404 page with 'This is an article' (located in the index.js of article/[id] directory)
    <Link href='/article/[id]' as={`/article/${article.id}`}>
      <span className={articleStyle.card}>
        <h3>{article.title} &rarr;</h3>
        <p>{article.excerpt}</p>
      </span>
    </Link>
  )
}

export default ArticleItem;