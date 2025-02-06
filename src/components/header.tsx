import Link from 'next/link';
import { getUserProfile } from '@/utils/data';
import { navLinks } from '@/utils/static-data';
import LogoImg from './ui/logo-img';

const Header = async () => {
    const { user } = await getUserProfile();

    return (
        <header className="container mx-auto p-3 sticky top-0">
            <nav className="flex justify-between items-center border py-3 px-5 rounded-full bg-white z-10 bg-blur-md shadow-lg">
                <LogoImg />

                <div className="hidden md:flex flex-1 items-center justify-end ps-4">
                    <div className="flex items-center">
                        {navLinks.map((link, idx) => (
                            <Link key={idx} href={link.link} className="mr-4">
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        {
                            user ?
                                (<Link href={"/blog"} className='px-4 py-1 bg-black text-white rounded-full'>blog</Link>) :
                                (
                                    <>
                                        <Link href={"/login"} className='px-4 py-1 bg-black text-white rounded-full'>login</Link>
                                        <Link href={"/signup"} className='px-4 py-1 bg-black/20 rounded-full'>signup</Link>
                                    </>
                                )
                        }
                        {/* <button className="btn btn-primary">Resume</button> */}
                    </div>
                </div>

                <div className="md:hidden">
                    <button className="btn btn-primary">Menu</button>
                </div>
            </nav>
        </header>
    )
}

export default Header