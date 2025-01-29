'use client'
import { signOut } from '@/actions/auth'
import { useState } from 'react'

interface Props {
    email: string | undefined;
}

const NavProfile = (props: Props) => {
    const [loading, setLoading] = useState<boolean>(false);

    const handleSignout = async (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);
        
        await signOut();

        setLoading(false);
    }

    return (
        <div className='flex'>
            <p className='text-emerald-400 my-auto mx-8'>{props.email}</p>
            <form onSubmit={handleSignout}>
                <button className='text-emerald-400 font-semibold border-2 border-emerald-400 py-1 px-2 hover:bg-emerald-400 hover:text-zinc-100 hover:scale-110 transition-all cursor-default'>{loading ? 'Signing out..' : 'Sign out'}</button>
            </form>
        </div>
    );
}

export default NavProfile