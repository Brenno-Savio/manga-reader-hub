'use client';

import { signUp } from 'next-auth-sanity/client';
import { signIn, useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';

const defaultFormData = {
  name: '',
  email: '',
  password: '',
};

const Auth = () => {
  const [formData, setFormData] = useState(defaultFormData);

  const inputStyles =
    'border border-gray-300 sm:text-sm text-black roundedlg block w-full p-2.5 focus:outline-none';

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) router.push('/');
  }, [router, session]);

  const loginHandler = async () => {
    try {
      await signIn();
      router.push('/');
    } catch (error) {
      toast.error("Something wen't wrong");
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const user = await signUp(formData);
      if (user) {
        toast.success('Success. Please sign in');
      }
    } catch (error) {
      toast.error("Something wen't wrong");
    } finally {
      setFormData(defaultFormData);
    }
  };

  return (
    <section className="mx-auto flex flex-wrap justify-between bg-white text-quaternary dark:bg-tertiary-dark dark:text-tertiary-light">
      <Image
        src="/images/icon-3.jpeg"
        alt="icon-3"
        width={480}
        height={480}
        className="mx-auto rounded-lg max-[675px]:hidden"
      />
      <div className="mx-auto w-72 space-y-4 pt-10">
        <div className="mb-8 flex flex-col items-center justify-between md:flex-row">
          <h1 className="leadig-tight text-left text-xl font-bold tracking-tight">
            Create an account
          </h1>
          <p>or</p>
          <span className="inline-flex items-center">
            <AiFillGithub
              onClick={loginHandler}
              className="mr-3 cursor-pointer text-2xl text-black dark:text-white"
            />
            <FcGoogle
              onClick={loginHandler}
              className="ml-3 cursor-pointer text-2xl"
            />
          </span>
        </div>
        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Jack Sparrow"
            required
            className={inputStyles}
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="name@company.com"
            required
            className={inputStyles}
            value={formData.email}
            onChange={handleInputChange}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            required
            minLength={8}
            className={inputStyles}
            value={formData.password}
            onChange={handleInputChange}
          />

          <button
            type="submit"
            className="w-full items-center justify-center rounded-xl bg-secondary py-2.5 text-black dark:text-white"
          >
            Sign Up
          </button>
          <button onClick={loginHandler} className="text-sm text-primary dark:text-secondary">
            or Login
          </button>
        </form>
      </div>
    </section>
  );
};

export default Auth;
