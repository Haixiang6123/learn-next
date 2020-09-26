import * as React from 'react'
import {NextPage} from 'next'
import axios from 'axios'
import {useEffect, useState} from 'react'
import {TPost} from '../../lib/posts'

interface IProps {
}

const PostsIndex: NextPage<IProps> = () => {
  const [posts, setPosts] = useState<TPost[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isEmpty, setIsEmpty] = useState<boolean>(true)

  useEffect(() => {
    axios.get('/api/v1/posts')
      .then((response) => {
        setPosts(response.data)
        setIsLoading(false)
        setIsEmpty(response.data.length === 0)
      })
  }, [])

  return (
    <div>
      <h1>文章列表</h1>
      {
        isLoading ? <span>加载中</span> :
          isEmpty ? <span>空列表的</span> :
            posts.map(p => (
              <div key={p.id}>{p.id}</div>
            ))
      }
    </div>
  )
}

export default PostsIndex
