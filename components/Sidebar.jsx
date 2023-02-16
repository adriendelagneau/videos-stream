import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { BsMoonFill, BsFillSunFill } from 'react-icons/bs';
import { FaHeart } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

import { topics } from '../utils/constants'

export const dataAbonement = [
  {
    name: "adrien",
    img: '/movie-850.png'
  },
  {
    name: "adrien",
    img: '/movie-850.png'
  },
  {
    name: "adrien",
    img: '/movie-850.png'
  },
  {
    name: "adrien",
    img: '/movie-850.png'
  },
  {
    name: "adrien",
    img: '/movie-850.png'
  },
  {
    name: "adrien",
    img: '/movie-850.png'
  }
]


const Sidebar = () => {

  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])
  if (!mounted) return null


  return (
    <div className='relative h-auto sm:h-[calc(100vh-100px)] bg-myWhite dark:bg-myBlack  dark:text-white   z-1  overflow-y-scroll srollHide w-[62px] sm:w-[170px] sm:pl-4  flex flex-col items-center sm:items-start' >

      <div className='relative mt-7'>
        <input
          type="checkbox"
          id="toggle-switch"
          className={`${theme === 'light' ? 'bg-myBlack' : 'bg-myWhite'} cursor-pointer h-9 w-9 sm:w-[90px] rounded-full appearance-none  border-2`}
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        />
        <div className={`${theme === 'light' ? "right-[26px] sm:right-[78px]" : "left-[8px]"} absolute top-[8px] `}>
          {
            theme === 'light' ? (
              <BsMoonFill className="w-5 h-5 text-myWhite cursor-pointer absolute sm:-right-[70px] " onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} />
            ) : (
              <BsFillSunFill className="w-5 h-5 text-myBlack cursor-pointer " onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} />
            )
          }
        </div>
      </div>

      <div className='flex pt-7 sm:hover:text-red-700 sm:cursor-pointer '>
        <span className=' text-3xl sm:text-2xl sm:pr-3 text-myBlack dark:text-myWhite'><FaHeart /></span>
        <span className='hidden sm:block'>Liked</span>
      </div>

      <div className='h-[1px] w-[calc(100%-18px)] bg-slate-600 my-9 '></div>

      <ul className='flex flex-col '>
        {topics.map((t, i) => (
          <Link key={i} href={`/videos?topic=${t.name}`}>
            <li className='flex pb-6 sm:hover:text-red-700 sm:cursor-pointer'>
              <span className=' text-3xl sm:text-2xl sm:pr-3 '>{t.icon}</span>
              <span className='hidden sm:block capitalize'>{t.name}</span>
            </li>
          </Link>
        ))}
      </ul>

      <div className='h-[1px] w-[calc(100%-18px)] bg-slate-600 mb-9 sm:mt-5 '></div>

      <ul className='flex flex-col items-center sm:items-start'>
        <div className='hidden pb-8 text-xl sm:flex'>Abonnements</div>
        {
          dataAbonement.map((u, i) => (
            <li className='flex pb-6 sm:hover:text-red-700 sm:cursor-pointer' key={i}>
              <span className=' text-3xl sm:text-2xl sm:pr-3'><Image src={u.img} alt='' width={30} height={30} className="rounded-full "/></span>
              <span className='hidden sm:block'>{u.name}</span>
            </li>
          ))
        }
      </ul>

    </div>

  );
};

export default Sidebar;