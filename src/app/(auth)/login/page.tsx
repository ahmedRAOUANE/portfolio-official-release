"use client";

import { login } from '@/actions/login-actions'
import Link from 'next/link'
import { useState } from 'react';

const LoginPage = () => {
    const [error, setError] = useState<string | null>(null);

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = new FormData(e.currentTarget);
        const res = await login(data);

        if (res) {
            setError(res.message)
        }
    }

    return (
        <main className='w-screen h-screen flex items-center justify-center'>
            <div className='flex flex-col gap-5 bg-white rounded-xl border border-gray-200 p-4'>
                <h2 className='text-2xl font-bold text-center'>Login</h2>

                <form onSubmit={handleLogin} className='flex flex-col gap-3'>
                    {error && (
                        <div className='px-4 py-2 rounded-lg outline-1 bg-red-500 text-white'>
                            <p className='text-center'>{error}!</p>
                        </div>
                    )}

                    <input className='px-4 py-2 rounded-lg outline-1 ' type="email" name="email" id="email" required placeholder='Email' />
                    <input className='px-4 py-2 rounded-lg outline-1 ' type="password" name="password" id="password" required placeholder='pasword' />
                    <input className='px-4 py-2 rounded-lg outline-1 bg-blue-500 text-white cursor-pointer' type="submit" name="submit" id="submit" value={"Login"} />
                </form>

                <div className='border-t border-gray-400 p-3'>
                    <p>don&apos;t have an account? <Link href={"/signup"} className='text-blue-800'>Signup</Link></p>
                </div>
            </div>
        </main>
    )
}

export default LoginPage