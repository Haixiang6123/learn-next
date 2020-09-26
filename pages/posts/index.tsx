import * as React from 'react'
import {GetStaticProps, NextPage} from 'next'
import {getPosts, TPost} from '../../lib/posts'

interface IProps {
  posts: TPost[]
}

const PostsIndex: NextPage<IProps> = (props) => {
  const {posts} = props

  return (
    <div>
      <h1>文章列表</h1>
      {posts.map(p => (
        <div key={p.id}>{p.id}</div>
      ))}
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts()

  return {
    props: {
      posts
    }
  }
}

export default PostsIndex
