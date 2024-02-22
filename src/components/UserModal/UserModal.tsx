'use client';

import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { BiSolidCloudUpload } from 'react-icons/bi';
import { FaUserCircle } from 'react-icons/fa';
import { RiLogoutBoxRFill } from 'react-icons/ri';
import { TbBookFilled, TbSettingsFilled } from 'react-icons/tb';

type Props = {
  isOpen: boolean;
  setToggleModal: () => void;
};

const UserModal: FC<Props> = ({ isOpen, setToggleModal }) => {
  const { data: session } = useSession();

  return (
    <section
      className={`fixed inset-0 inset-x-auto z-[31] box-content w-auto items-start justify-end bg-tertiary-light text-end text-tertiary-dark shadow-lg shadow-black transition-all duration-300 ease-in-out dark:bg-tertiary-dark dark:text-tertiary-light ${isOpen ? 'pointer-events-auto right-0 opacity-100' : 'pointer-events-none -right-36 opacity-0'}`}
    >
      <div className="flex flex-col items-center justify-center bg-primary py-5">
        <button onClick={setToggleModal}>
          {session?.user.image ? (
            <div className="h-14 w-14 overflow-hidden rounded-full">
              <Image
                src={session.user.image}
                alt={session.user.name!}
                width={64}
                height={64}
                className="img scale-animation"
              />
            </div>
          ) : (
            <FaUserCircle className="h-14 w-14 cursor-pointer" />
          )}
        </button>

        <p className="pt-2 text-white">{session?.user.name}</p>
      </div>
      <ul className="px-5 pt-10">
        <Link
          href={`/users/${session?.user.id}?option=reading-list`}
          className="flex items-center justify-end py-2"
          onClick={setToggleModal}
        >
          <p className="px-2">Reading list</p> <TbBookFilled />
        </Link>
        <Link
          href={`/users/${session?.user.id}?option=upload-novel`}
          className="flex items-center justify-end py-2"
          onClick={setToggleModal}
        >
          <p className="px-2">Upload Novel</p> <BiSolidCloudUpload />
        </Link>
        <Link
          href={`/users/${session?.user.id}?option=settings`}
          className="flex items-center justify-end py-2"
          onClick={setToggleModal}
        >
          <p className="px-2">Settings</p> <TbSettingsFilled />
        </Link>
      </ul>
      <section className="end flex h-80 items-end justify-end px-5 text-end">
        <button
          onClick={() => signOut({ callbackUrl: '/' })}
          className="flex items-center justify-end py-2"
        >
          <p className="px-2">Logout</p> <RiLogoutBoxRFill />
        </button>
      </section>
    </section>
  );
};

export default UserModal;
