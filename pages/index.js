import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Sidebar from '@/components/Sidebar'
import axios from 'axios'


const inter = Inter({ subsets: ['latin'] })

export default function Home({ posts }) {
  console.log(posts)
  return (
    <div className='flex w-full bg-myWhite dark:bg-myBlack'>
    <Sidebar />
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