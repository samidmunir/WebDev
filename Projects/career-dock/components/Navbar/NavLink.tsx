'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface Props {
    icon: React.ReactNode;
    href: string;
    label: string;
}

const NavLink = (props: Props) => {
    const pathname = usePathname();
    return (
        <div className={`${pathname === props.href ? 'text-emerald-400' : 'text-zinc-500'} flex font-semibold my-auto  hover:text-emerald-400 hover:scale-110 transition-all cursor-default`}>
            <Link href={props.href} className='text-xl hover:text-emerald-400 transition-all cursor-default'>{props.label}</Link>
            <span className='text-2xl ml-2 hover:text-emerald-400 transition-all cursor-default'>{props.icon}</span>
        </div>
    );
}

export default NavLink