"use client";

import React from 'react'

const LogoutBtn = ({ children, className }: { children?: React.ReactNode, className?: string }) => {
    return (
        <>
            <form action="/api/auth/signout" method='post'>
                <button className={className} type="submit" title='logout'>
                    {children || "Logout"}
                </button>
            </form>
        </>
    )
}

export default LogoutBtn