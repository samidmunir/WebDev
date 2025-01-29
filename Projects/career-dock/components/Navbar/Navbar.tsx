'use client'
import { useState } from 'react'
import Link from 'next/link'
import NavLink from './NavLink'
import { BsFillGrid1X2Fill, BsFillHouseFill, BsFire, BsInfoCircleFill } from 'react-icons/bs'

interface NavbarLink {
    id: number;
    icon: React.ReactNode;
    href: string;
    label: string;
}


const Navbar = () => {
    const navlinks: NavbarLink[] = [
        {
            id: 1,
            icon: <BsFillHouseFill />,
            href: '/',
            label: 'Home',
        },
        {
            id: 2,
            icon: <BsFire />,
            href: '/featured',
            label: 'Featured',
        },
        {
            id: 3,
            icon: <BsInfoCircleFill />,
            href: '/about',
            label: 'About',
        },
    ];

    const [loggedIn, setLoggedIn] = useState<boolean>(true);

    return (
        <nav className='flex justify-between align-middle bg-stone-900 px-8 py-4'>
            <div className='flex text-emerald-400'>
                <BsFillGrid1X2Fill className='text-4xl' />
                <Link href='/' className='text-3xl font-bold ml-2'>Career Dock</Link>
            </div>
            <div className='flex my-auto'>
                <div className='flex gap-8 my-auto'>
                    {navlinks.map((link) => <NavLink key={link.id} icon={link.icon} href={link.href} label={link.label} />)}
                </div>
                <div className='my-auto text-emerald-400 mx-8 border-4 border-emerald-400 py-1 px-2 hover:bg-emerald-400 hover:text-stone-900 hover:scale-110 transition-all cursor-default'>
                    {loggedIn && <p>example@email.com</p>}
                </div>
            </div>
        </nav>
    );
}

export default Navbar