import axios from 'axios';
import React from 'react';

const VideoDetails = ({ post }) => {
    
    return (
        <div className='w-full flex px-2 gap-4'>
            <div className='w-full h-auto flex justify-center'>
                <video autoPlay controls className='xl:h-[40vw] h-[50vw] rounded-xl'>
                    <source src={post.videoSrc} type="video/mp4" />
                </video>
                 
                    
                
            </div>
            <div className='min-[1820px]:w-[25%] hidden min-[1820px]:block h-[1900px] bg-black rounded-xl'>
                {

                }
            </div>
        </div>
    );
};

export default VideoDetails;


export async function getServerSideProps(context) {
    const id = context.params.id; // access the ID from the context
    const res = await axios(`${process.env.NEXTAUTH_URL}/api/post/${id}`);
    const post = res.data.post
  
    return {
      props: {
        post,
      },
    };
  }