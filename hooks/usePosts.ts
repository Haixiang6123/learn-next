import {useEffect, useState} from 'react'
import {TPost} from '../lib/posts'
import axios from 'axios'

const usePosts = () => {
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

  return {isLoading, isEmpty, posts}
}

export default usePosts
