"use client";

import { FormEvent, useState } from "react";
import Logo from "./Logo";

export default function LoginForm() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name && value) {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col gap-2 w-full justify-center items-center'
    >
      <div className='flex items-center justify-center mb-10'>
        <Logo />
      </div>
      <div className='flex flex-col w-1/2 p-3'>
        <input
          type='email'
          onChange={handleChange}
          name='email'
          value={formData.email}
          className='border border-[#686868] py-4 px-3 rounded-input outline-none text-xl'
        />
        <label
          htmlFor='email'
          className='ml-2 mt-1 text-lg dark:text-slate-300'
        >
          Email
        </label>
      </div>
      <div className='flex flex-col w-1/2 p-3'>
        <input
          type='password'
          onChange={handleChange}
          name='password'
          value={formData.password}
          className='border border-[#686868] py-4 px-3 rounded-input outline-none text-xl'
        />
        <label
          htmlFor='password'
          className='ml-2 mt-1 text-lg dark:text-slate-300'
        >
          Password
        </label>
      </div>
      <div className='flex flex-col items-center gap-1'>
        <button
          type='submit'
          disabled={
            formData.email.length === 0 || formData.password.length === 0
          }
          className='rounded-button border border-[#686868] p-3 w-30 bg-button-light text-black font-bold text-lg hover:bg-neutral-200 cursor-pointer disabled:cursor-not-allowed'
        >
          Login
        </button>
        <span>
          Don&apos;t have an account?{" "}
          <a href='/register' className='text-blue-500 underline'>
            Register
          </a>
        </span>
      </div>
    </form>
  );
}

// add logo in Logo component
