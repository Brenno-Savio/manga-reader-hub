'use client';

import Image from 'next/image';
import Link from 'next/link';
import { AiFillFire } from 'react-icons/ai';
import { FaBookOpen } from 'react-icons/fa';
import { MdNewReleases } from 'react-icons/md';

const Header = () => {
  //   const { data: session } = useSession();

  return (
    <header className="bg-primary fixed mx-auto flex w-full flex-wrap py-6 md:flex-nowrap">
      <div className="flex">
        <div className="flex items-center justify-center">
          <Image
            alt="icon"
            src={'/images/icon-2.jpeg'}
            width={256}
            height={256}
            className="mx-2 h-16 w-16 rounded-full"
          />
          <Link href={'/'} className="px-2 text-4xl font-bold text-white">
            Novel Libertas
          </Link>
        </div>

        <ul className="flex items-center justify-center px-5 align-middle">
          <li className="flex items-center px-3 py-5 text-xl text-neutral-300 hover:text-white">
            <FaBookOpen />
            <Link href={'/'}>Novels</Link>
          </li>
          <li className="flex items-center px-3 py-5 text-xl text-neutral-300 hover:text-white">
            <MdNewReleases />
            <Link href={'/'}>Recentes</Link>
          </li>
          <li className="flex items-center px-3 py-5 text-xl text-neutral-300 hover:text-white">
            <AiFillFire />
            <Link href={'/'}>Mais Lidos</Link>
          </li>
        </ul>
      </div>
      <ul>
        {/* <SearchBar/> */}
        {/* <li>
          {session?.user ? (
            <Link href={'/'}>
              {session.user.image ? (
                <div className="h-10 w-10 overflow-hidden rounded-full">
                  <Image
                    src={session.user.image}
                    alt={session.user.name!}
                    width={40}
                    height={40}
                    className="img scale-animation"
                  />
                </div>
              ) : (
                <FaUserCircle className="cursor-pointer" />
              )}
            </Link>
          ) : (
            <Link href={'/'}>
              <FaUserCircle className="cursor-pointer" />
            </Link>
          )}
        </li> */}
      </ul>
    </header>
  );
};

export default Header;