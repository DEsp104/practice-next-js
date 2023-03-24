// you can apply a database (mongodb, sqlite database, etc) here but we'r  using the data.js file created (root) as a sample
import { articles } from '../../../data'



export default function handler(req, res) {
  // Serving this articls from api
  // Go to the browser search bar and retrieve these article by typing the path, ex: http://localhost:3000/api/articles

  res.status(200).json(articles);

}