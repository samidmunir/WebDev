import { BsTagFill, BsEnvelopeFill, BsShieldLockFill, BsExclamationCircleFill } from 'react-icons/bs'
import SignupButton from './SignupButton'
import LoginButton from '../Login/LoginButton'

const SignupForm = () => {
    return (
        <form className='bg-stone-900 w-[600px] ml-16 p-8'>
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
            </section>
            <section className='flex justify-center gap-20 mt-8'>
                <SignupButton />
                <LoginButton />
            </section>
        </form>
    );
}

export default SignupForm