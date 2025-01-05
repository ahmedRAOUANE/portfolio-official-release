import { signup } from '@/actions/login-actions'
import Link from 'next/link'
import React from 'react'

const SignupPage = () => {
    return (
        <main className='w-screen h-screen flex items-center justify-center'>
            <div className='flex flex-col gap-5 bg-white rounded-xl border border-gray-200 p-4'>
                <h2 className='text-2xl font-bold text-center'>Signup</h2>

                <form action={signup} className='flex flex-col gap-3'>
                    <input className='px-4 py-2 rounded-lg outline-1 ' type="email" name="email" id="email" required placeholder='Email' />
                    <input className='px-4 py-2 rounded-lg outline-1 ' type="password" name="password" id="password" required placeholder='pasword' />
                    <input className='px-4 py-2 rounded-lg outline-1 bg-blue-500 text-white cursor-pointer' type="submit" name="submit" id="submit" value={"Login"} />
                </form>

                <div className='border-t border-gray-400 p-3'>
                    <p>already have an account? <Link href={"/login"} className='text-blue-800'>Login</Link></p>
                </div>
            </div>
        </main>
    )
}

export default SignupPage