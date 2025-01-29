'use client'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import NavLink from './NavLink'
import NavProfile from './NavProfile'
import { BsFillGrid1X2Fill, BsFillHouseFill, BsFire, BsInfoCircleFill } from 'react-icons/bs'
import { createClient } from '@/utils/supabase/client'

interface NavbarLink {
    id: number;
    icon: React.ReactNode;
    href: string;
    label: string;
}

const Navbar = async () => {
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

    const url = usePathname();

    const supabase = createClient();

    const {data: {user}} = await supabase
        .auth
        .getUser();

    return (
        <nav className='flex justify-between align-middle bg-stone-900 px-8 py-4'>
            <div className='flex text-emerald-400'>
                <BsFillGrid1X2Fill className='text-4xl' />
                <Link href='/' className='text-3xl font-bold ml-2'>Career Dock</Link>
            </div>
            <div className='flex my-auto'>
                <div className='flex gap-8 my-auto'>
                    {navlinks.map((link) => <NavLink key={link.id} icon={link.icon} href={link.href} label={link.label} active={url === link.href} />)}
                </div>
                {user ? <NavProfile email={user?.email} /> : <p className='text-emerald-400'>NO USER</p>}
            </div>
        </nav>
    );
}

export default Navbar