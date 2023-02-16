import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {format} from "timeago.js";

const VideoCard = ({ post }) => {

    return (
        <div className=' mb-10 w-[280px] h-[300px] lg:w-[330px]  cursor-pointer '>
            <div className='h-[70%]  w-full block'>
                <Link href={`http://localhost:3000/video/${post._id}`}>

                <Image
                    src={post.imgSrc}
                    alt=''
                    style={{ width: '100%', height: '100%' }}
                    width={200}
                    height={200}
                    // layout="responsive"
                    className="rounded-xl"
                />
                    </Link>
            </div>
            <div className='h-[30%] w-full  flex '>
                <div className='px-1 pt-2 h-full w-[15%]'>
                    <Image src='/index.png' alt='' width={35} height={35}  className='rounded-full'/>
                </div>
                <div className='pt-2 h-full w-[85%] flex flex-col gap-1'>
                    <div className='font-semibold'>{post.caption}</div>
                    <div>{post.postByUsername}</div>
                    <div className='flex'>
                        <div className='pr-5'>548 458 vues</div>
                        <div>{format(post.createdAt)}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoCard;