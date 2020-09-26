import {NextApiHandler} from 'next'

const Posts: NextApiHandler = (req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.json({
    name: 'Jack'
  })
}

export default Posts
