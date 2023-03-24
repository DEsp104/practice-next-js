// you can apply a database (mongodb, sqlite database, etc) here but we'r  using the data.js file created (root) as a sample
import { articles } from '../../../data'



export default function handler(req, res) {
  // get the article id from request
  const articleId =  req.query.id
  
  // return the article that matches the id requested
  const filtered = articles.filter(article => article.id === articleId);

  // return the article with the matched id or else send a 404 message
  if (filtered.length > 0) {
      res.status(200).json(filtered[0])
  } else {
    res.status(404).json({message: `article ${articleId} is not found`})
  }
}