import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllPosts } from './postsSlice';
import './style.scss';

const PostsList = () => {

  const posts = useSelector(selectAllPosts);
  const renderedPosts = posts.map(post => (
    <article className='card' key={post.id}>
      <h3 className='title' >{post.title}</h3>
      <p className='content' >{post.content}</p>
    </article>
  ))

  return (
    <section className='main' >
      <h1>POSTS</h1>
      <div>
        {renderedPosts}
      </div>
    </section>

  )
}

export default PostsList