'use client'
import { BsTagFill, BsEnvelopeFill, BsShieldLockFill, BsExclamationCircleFill, BsCake2Fill, BsPersonWorkspace } from 'react-icons/bs'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import SignupButton from './SignupButton'
import { signUp } from '@/actions/auth'

const SignupForm = () => {
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        setError(null);

        const formData = new FormData(event.currentTarget);
        const result = await signUp(formData);

        if (result.status === 'success') {
            router.push('/login');
        } else {
            setError(result.status);
        }

        setLoading(false);
    };

    return (
        <form onSubmit={handleSubmit} className='bg-stone-900 w-[900px] ml-16 p-8'>
            <section className='flex justify-center gap-16'>
                <section>
                    <section>
                        <div className='flex justify-between'>
                            <label className='text-emerald-400 font-semibold text-xl'>Username</label>
                            <BsTagFill className='text-2xl text-emerald-400' />
                        </div>
                        <input
                            id='username'
                            name='username'
                            type='text'
                            placeholder='Username'
                            className='w-[200px] mx-auto mt-2 bg-stone-800 text-zinc-100 py-1 px-2 border-b-4 border-emerald-400 focus:outline-none cursor-default' 
                        />
                    </section>
                    <section className='mt-4'>
                        <div className='flex justify-between'>
                            <label className='text-emerald-400 font-semibold text-xl'>Email</label>
                            <BsEnvelopeFill className='text-2xl text-emerald-400' />
                        </div>
                        <input
                            id='email'
                            name='email'
                            type='text'
                            placeholder='Your email'
                            className='w-[200px] mx-auto mt-2 bg-stone-800 text-zinc-100 py-1 px-2 border-b-4 border-emerald-400 focus:outline-none cursor-default' 
                        />
                    </section>
                </section>
                <section>
                    <section>
                        <div className='flex justify-between'>
                            <label className='text-emerald-400 font-semibold text-xl'>Password</label>
                            <BsShieldLockFill className='text-2xl text-emerald-400' />
                        </div>
                        <input
                            id='password'
                            name='password'
                            type='text'
                            placeholder='Password'
                            className='w-[200px] mx-auto mt-2 bg-stone-800 text-zinc-100 py-1 px-2 border-b-4 border-emerald-400 focus:outline-none cursor-default' 
                        />
                    </section>
                    <section className='mt-4'>
                        <div className='flex justify-between'>
                            <label className='text-emerald-400 font-semibold text-xl'>Confirm</label>
                            <BsExclamationCircleFill className='text-2xl text-emerald-400' />
                        </div>
                        <input
                            id='password_confirm'
                            name='password_confirm'
                            type='password'
                            placeholder='Confirm password'
                            className='w-[200px] mx-auto mt-2 bg-stone-800 text-zinc-100 py-1 px-2 border-b-4 border-emerald-400 focus:outline-none cursor-default' 
                        />
                    </section>
                </section>
                <section>
                    <section>
                        <div className='flex justify-between'>
                            <label className='text-emerald-400 font-semibold text-xl'>Date of Birth</label>
                            <BsCake2Fill className='text-2xl text-emerald-400' />
                        </div>
                        <input
                            id='dob'
                            name='dob'
                            type='date'
                            className='w-[200px] mx-auto mt-2 bg-stone-800 text-zinc-100 py-1 px-2 border-b-4 border-emerald-400 focus:outline-none cursor-default' 
                        />
                    </section>
                    <section className='mt-4'>
                        <div className='flex justify-between'>
                            <label className='text-emerald-400 font-semibold text-xl'>Employed</label>
                            <BsPersonWorkspace className='text-2xl text-emerald-400' />
                        </div>
                        <div className='flex justify-left gap-4 mt-4'>
                            <label className='text-zinc-100'>
                                <input type='radio' name='employed' value='YES' className='mr-2' />YES
                            </label>
                            <label className='text-zinc-100'>
                                <input type='radio' name='employed' value='NO' className='mr-2' />NO
                            </label>
                        </div>
                    </section>
                </section>
            </section>
            <section className='flex justify-center gap-20 mt-8'>
                <SignupButton loading={loading} />
            </section>
            {error && <p className='text-red-500 font-bold'>{error}</p>}
        </form>
    );
}

export default SignupForm