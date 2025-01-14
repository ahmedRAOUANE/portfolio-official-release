import { adminNavLinks } from "@/utils/static-data"
import Link from "next/link"

const AdminLoginPage = async () => {
    return (
        <main className='flex flex-col justify-start items-center container'>
            <section className="w-full p-4">
                <div className="flex flex-col p-20 gap-5">
                    <h1 className="text-6xl">Welcom To Admin <br /> Control Center</h1>

                    <p className="text-2xl text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus mollitia sint iusto error facere minima asperiores laboriosam accusantium ea labore.</p>
                </div>
            </section>

            <section className="w-full p-5">
                <h2 className="text-4xl mb-5 font-bold">Title</h2>

                <p className="text-2xl mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus mollitia sint iusto error facere minima asperiores laboriosam accusantium ea labore.</p>

                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
                    {adminNavLinks.map((link, idx) => (
                        link.href !== "/admin" && link.flag !== "disabled" && (<Link key={idx} href={link.href} className='p-6 rounded-lg bg-gray-100 hover:bg-gray-200 col-span-1 shadow outline-2'>
                            <h3 className="text-2xl">{link.name}</h3>
                            <p className="text-sm text-gray-500">{link.description}</p>
                        </Link>)
                    ))}
                </div>
            </section>
        </main>
    )
}

export default AdminLoginPage