"use client";

import { signout } from '@/actions/login-actions'
import React from 'react'

const LogoutBtn = () => {
    return (
        <>
            <form action="/api/auth/signout" method='post'>
                <button className='px-4 py-2 rounded-md bg-black text-white'>Logout</button>
            </form>
        </>
    )
}

export default LogoutBtn