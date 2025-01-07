"use client";

import { signup } from '@/actions/login-actions'
import Link from 'next/link'
import React, { useState } from 'react'

const SignupPage = () => {
    const [error, setError] = useState<string | null>(null);

    const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = new FormData(e.currentTarget);
        const res = await signup(data);

        if (res) {
            setError(res.message)
        }
    }

    return (
        <main className='w-screen h-screen flex items-center justify-center'>
            <div className='flex flex-col gap-5 bg-white rounded-xl border border-gray-200 p-4'>
                <h2 className='text-2xl font-bold text-center'>Signup</h2>

                <form onSubmit={handleSignup} className='flex flex-col gap-3'>
                    {error && (
                        <div className='px-4 py-2 rounded-lg outline-1 bg-red-500 text-white'>
                            <p className='text-center'>{error}!</p>
                        </div>
                    )}

                    <input className='px-4 py-2 rounded-lg outline-1 bg-gray-200 ' type="email" name="email" id="email" required placeholder='Email' />
                    <input className='px-4 py-2 rounded-lg outline-1 bg-gray-200 ' type="password" name="password" id="password" required placeholder='pasword' />
                    <input className='px-4 py-2 rounded-lg outline-1 bg-blue-500 text-white cursor-pointer' type="submit" name="submit" id="submit" value={"Signup"} />
                </form>

                <div className='border-t border-gray-400 p-3'>
                    <p>already have an account? <Link href={"/login"} className='text-blue-800'>Login</Link></p>
                </div>
            </div>
        </main>
    )
}

export default SignupPage