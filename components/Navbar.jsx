import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/router';
import filterSearch from '@/utils/filterSearch';

const Navbar = () => {

    const { data: session } = useSession()
    const [ isModalOpen, setIsModalOpen ] = useState(false)
    const router = useRouter();
    const [search, setSearch] = useState(router.query.search ? router.query.search : "");
 
    const makeSearch = (e) => {
        e.preventDefault();
        filterSearch({router, search: search ? search.toLowerCase() : 'all'});
      };
    
    return (
        <div className='w-[100%] h-[100px] bg-myWhite dark:bg-myBlack dark:text-myWhite flex justify-between items-center relative z-5'>

<Link href='/'  className='h-[100px] flex pl-3 items-center'>
          <div>
            <Image src='/movie-850.png' alt='logo ' width={40} height={30} />
          </div>
          <div className='hidden pl-4 text-2xl sm:block'>MyVideo</div>
            </Link>
            
            <div className='relative'>
                <form onSubmit={makeSearch}>
                    <input
                        className='rounded-xl w-[200px] md:w-[300px] lg:w-[400px] h-8 pl-5 dark:text-white outline-none border border-black dark:border-white'
                        placeholder='Search ...'
                        type="text" 
                        value={search.toLowerCase()} 
                        onChange={e => setSearch(e.target.value)} 
                        
                    />
                </form>
                <span className='absolute flex items-center top-2 right-4 dark:text-white'>
                    <BsSearch />
                </span>
            </div>
            
            {
                session ? (
                    <button onClick={() => setIsModalOpen(!isModalOpen)} className='relative p-1 mr-4 border border-gray-800 rounded-full dark:border-gray-400'>
                        <Image src={session?.user.image} alt="" width={43} height={33} className='rounded-full ' />
                        <div className={`rounded-lg absolute top-[70px] -left-[250px] h-[200px] z-50 bg-neutral-800 w-[300px] ${isModalOpen ? 'block' : 'hidden'}`}>
                            <div onClick={() => signOut()}>deconnexion</div>
                            <div>
                                <Link href='/profil'>
                                profile
                                </Link>
                            </div>
                        </div>
                    </button>
                ): (
                    <button onClick={() => signIn("google")} className='flex items-center justify-between p-3 mr-4 border rounded-full '>
                        <Image src='/google-logo-9817.png' alt="" width={23} height={23} className='sm:mr-3' />
                        <span className='hidden sm:block' >Connexion</span>
                    </button>                      
                )
            }
        </div>
    );
};

export default Navbar;