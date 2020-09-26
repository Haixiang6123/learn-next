import * as React from 'react'
import {NextPage} from 'next'
import usePosts from '../../hooks/usePosts'

interface IProps {
}

const PostsIndex: NextPage<IProps> = () => {
  const {isLoading, isEmpty, posts} = usePosts()

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
