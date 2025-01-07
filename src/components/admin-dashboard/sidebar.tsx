'use client';

import { useState } from 'react';
import { adminNavLinks } from '@/utils/static-data';
import { FaAngleRight } from 'react-icons/fa';
import { usePathname, useRouter } from 'next/navigation';

const Sidebar = () => {
    const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});
    const [activeSection, setActiveSection] = useState<string>("Home");

    const activePath = usePathname();

    const router = useRouter();

    const toggleSection = (name: string) => {
        setOpenSections((prev) => ({
            ...prev,
            [name]: !prev[name],
        }));

        setActiveSection(name);
    };

    const handleLinkClick = (href: string) => {
        router.push(href);
    };

    const isActive = (href: string): boolean => {
        return href === activePath;
    };

    return (
        <div className="w-full">
            {adminNavLinks.map((link, idx) => (
                link.flag !== "disabled" && <div
                    key={idx}
                    className={`mb-3 py-3 px-4 cursor-pointer flex flex-col gep-2 rounded-lg bg-gray-100 col-span-1 shadow outline-2 ${activeSection === link.name ? 'bg-gray-100' : 'hover:bg-gray-300'}`}
                >
                    <div
                        className='flex justify-between'
                        onClick={link.subLinks.length > 0 ? () => toggleSection(link.name) : () => handleLinkClick(link.href)}
                    >
                        <h3 className="text-2xl">{link.name}</h3>

                        <button className={`text-2xl ${link.subLinks.length > 0 ? '' : 'text-gray-400'}`}>
                            <FaAngleRight className={`transition-all duration-200 ease-in-out`} />
                        </button>
                    </div>

                    {link.subLinks.length > 0 && (
                        openSections[link.name] && (
                            <div className="mt-2 flex flex-col gap-3">
                                {link.subLinks.map((subLink, subIdx) => (
                                    <button
                                        key={subIdx}
                                        className={`py-2 px-4 rounded-lg bg-white shadow outline-2 ${isActive(subLink.href) ? 'bg-blue-200' : 'hover:bg-gray-200'}`}
                                        onClick={() => handleLinkClick(subLink.href)}
                                    >
                                        <h4 className="text-lg text-start">{subLink.name}</h4>
                                    </button>
                                ))}
                            </div>
                        )
                    )}
                </div>
            ))}
        </div>
    );
};

export default Sidebar;
