import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Sidebar from '@/components/Sidebar'
import axios from 'axios'
import { useEffect, useState } from 'react'
import VideoCard from '@/components/VideoCard'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ posts }) {

  const [allPosts, setAllPosts] = useState({})
  
  useEffect(() => {
    
    setAllPosts(posts)
  }, [posts]);

  return (
    <div className='flex w-full bg-myWhite dark:bg-myBlack'>
      <Sidebar />
      <div className='w-[100%]  dark:bg-myBlack dark:text-white h-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  mt-[100px] ml-[62px] sm:ml-[170px] min-h-[calc(100vh-100px)]'>
           {allPosts.posts?.map((post, i) => (
             <VideoCard key={i} post={post} />
           ))}
        </div>
  </div>
  )
}

export const getServerSideProps = async ({ query }) => {
  
  const topic = query.topic || 'all'
  const search = query.search || 'all'

  const res = await axios.get(`${process.env.NEXTAUTH_URL}/api/post?topic=${topic}&title=${search}`)

  const posts = res.data

return {
    props: {posts: posts}
}
}