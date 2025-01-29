import { BsEnvelopeFill, BsShieldLockFill } from 'react-icons/bs'
import LoginButton from './LoginButton'

const LoginForm = () => {
    return (
        <form className='bg-stone-900 w-[300px] ml-16 p-8'>
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
                <LoginButton />
            </section>
        </form>
    );
}

export default LoginForm