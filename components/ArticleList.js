import ArticleItem from './ArticleItem'
import articleStyle from '../styles/Article.module.css'

const ArticleList = ({articles}) => {
  return (
    <div className={articleStyle.grid}>
       {/* Create items of articles fetched from the api */}
       {articles.map((article) => (
        // Pass in the ArticleItem component
        // Pass the article attribute containing the data from the api
        // eslint-disable-next-line react/jsx-key
        <ArticleItem article={article} />
      ))}
    </div>
  )
}

export default ArticleList