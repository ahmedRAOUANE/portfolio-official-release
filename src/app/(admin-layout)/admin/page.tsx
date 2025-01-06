import LogoutBtn from "@/components/logout-btn"

const AdminLoginPage = () => {
    return (
        <main className='flex justify-center items-center h-screen'>
            <div className="w-full md:w-1/2 p-4">
                <div className="flex justify-between">
                    <h1>Admin Page</h1>

                    <LogoutBtn />
                </div>
            </div>
        </main>
    )
}

export default AdminLoginPage