// icons
import { MdEdit } from 'react-icons/md'

const FoterControlCenter = () => {
    return (
        <main className='container p-5 flex flex-col gap-20'>
            <section className='flex flex-col gap-5 p-10'>
                <h1 className='text-4xl font-bold'>Footer Control Center</h1>

                <p className='text-2xl'>Here you can manage footer</p>
            </section>

            <section className=''>
                <div className='flex justify-between items-center'>
                    <h2 className='text-2xl mb-3'>Created Links</h2>

                    <button className='text-3xl'>
                        <MdEdit />
                    </button>
                </div>

                <ul className='flex gap-3'>
                    {/* {headerLinks.map((link, idx) => (
                        <li key={idx} className='flex'>
                            <Link href={`/admin/footer/${link.id}`} className='p-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 shadow outline-2'>{link.name}</Link>
                        </li>
                    ))} */}
                </ul>
            </section>

            <section>
            </section>
        </main>
    )
}

export default FoterControlCenter