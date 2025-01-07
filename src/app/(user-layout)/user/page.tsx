import LogoutBtn from '@/components/logout-btn'
import { FeatureFlagService } from '@/services/featureFlags'
import { redirect } from 'next/navigation';
import React from 'react'

const UserHomePage = async () => {
    const featureFlags = await FeatureFlagService.getInstance();
    const isUserPageEnabled = featureFlags.isEnabled("userPage")

    if (!isUserPageEnabled) {
        redirect("/");
    }

    return (
        <main className='flex justify-center items-center h-screen'>
            <div className="w-full md:w-1/2 p-4">
                <div className="flex justify-between">
                    <h1>User Page</h1>

                    <LogoutBtn />
                </div>
            </div>
        </main>
    )
}

export default UserHomePage