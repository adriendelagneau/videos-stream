import VideoCard from '@/components/VideoCard';
import axios from 'axios';
import React from 'react';

const Videos = (props) => {
    return (
      <>
      <div className='w-[100%]  dark:bg-myBlack dark:text-white h-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 place-items-center'>
           
        {props.posts?.map((post, i) => (
          
          <VideoCard key={i} post={post} />
        ))}
           
        </div>
    </>
    );
};

export default Videos;

export async function getServerSideProps({query}) {

    const topic = query.topic || 'all'
    const search = query.search || 'all'
  
    const res = await axios.get(
      `{${process.env.NEXTAUTH_URL}/api/post?topic=${topic}&title=${search}`
    )

    return {
      props: {
        posts: res.data.posts,
    
      },
    }
  }
  
