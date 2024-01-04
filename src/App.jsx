import { useState } from 'react'
import SocialCard from './Components/SocialCard'

function App() {
  const [post, setPost] = useState(
    {
      isLike: false
    }
  )

  console.log(post)
  return (
    <div className='bg-gray-500 w-screen h-screen flex flex-row justify-center items-center px-4'>
      <SocialCard
        post = {post}
        setPost = {setPost}
      />
    </div>
  )
}

export default App
