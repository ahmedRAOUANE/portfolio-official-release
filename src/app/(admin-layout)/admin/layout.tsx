import Sidebar from '@/components/admin-dashboard/sidebar'
import LogoutBtn from '@/components/logout-btn'
import { adminNavLinks } from '@/utils/static-data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoLogOutOutline } from 'react-icons/io5'

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='grid grid-cols-12 grid-rows-12 h-screen'>
            {/* Left Side */}
            <div className='flex flex-col gap-5 p-3 col-span-12 row-span-1 md:row-span-12 md:col-span-3 bg-white border border-gray-400 shadow'>
                <div className='flex justify-between items-center mb-10'>
                    <Link href={"/"} className='flex items-center justify-start gap-3'>
                        <Image src="/me-logo.svg" alt="Logo" priority width={50} height={50} />

                        <div>
                            <h1 className='text-2xl font-bold'>Admin</h1>
                            <p className='text-sm text-gray-500'>Dashboard</p>
                        </div>
                    </Link>

                    <div>
                        <LogoutBtn className='text-4xl'>
                            <IoLogOutOutline />
                        </LogoutBtn>
                    </div>
                </div>

                <nav className='hidden md:flex flex-col gap-2'>
                    <Sidebar />
                </nav>

                <div className='flex-1 flex flex-col items-center justify-end'>
                    <p className='text-sm text-gray-500'>All Rights Reserved</p>
                </div>
            </div>

            {/* Right Side */}
            <div className='col-span-12 md:col-span-9 row-span-11 md:row-span-12 overflow-hidden'>
                <div className='w-full h-full overflow-auto'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default AdminLayout