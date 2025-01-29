'use client'
import { BsEnvelopeFill, BsShieldLockFill } from 'react-icons/bs'
import LoginButton from './LoginButton'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { signIn } from '@/actions/auth'

const LoginForm = () => {
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        setError(null);

        const formData = new FormData(event.currentTarget);
        const result = await signIn(formData);

        if (result.status === 'success') {
            router.push('/');
        } else {
            setError(result.status);
        }

        setLoading(false);
    }

    return (
        <form onSubmit={handleSubmit} className='bg-stone-900 w-[300px] ml-16 p-8'>
            <section className='text-center'>
                <div className='flex justify-between w-[200px] mx-auto'>
                    <label className='text-emerald-400 font-semibold text-xl'>Email</label>
                    <BsEnvelopeFill className='text-emerald-400 text-2xl my-auto' />
                </div>
                <input
                    id='email'
                    name='email'
                    type='text'
                    placeholder='Your email' 
                    className='w-[200px] mx-auto mt-2 bg-stone-800 text-zinc-100 py-1 px-2 border-b-2 border-emerald-400 focus:outline-none cursor-default' 
                />
            </section>
            <section className='text-center'>
                <div className='flex justify-between w-[200px] mx-auto mt-4'>
                    <label className='text-emerald-400 font-semibold text-xl'>Password</label>
                    <BsShieldLockFill className='text-emerald-400 text-2xl my-auto' />
                </div>
                <input 
                    id='password'
                    name='password'
                    type='password'
                    placeholder='Password'
                    className='w-[200px] mx-auto mt-2 bg-stone-800 text-zinc-100 py-1 px-2 border-b-2 border-emerald-400 focus:outline-none cursor-default' 
                />
            </section>
            <section className='text-center mt-8'>
                <LoginButton loading={loading} />
            </section>
            {error && <p className='text-red-500 font-bold'>{error}</p>}
        </form>
    );
}

export default LoginForm