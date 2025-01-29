import { BsFillGrid1X2Fill, BsFillPersonCheckFill } from 'react-icons/bs'
import LoginForm from '@/components/Login/LoginForm'

const LoginPage = () => {
    return (
        <main className='bg-stone-800 h-[500px] p-8'>
            <section className='w-[2/3] mx-auto'>
                <div className='flex text-zinc-500 ml-8'>
                    <BsFillGrid1X2Fill className='text-5xl my-auto' />
                    <h1 className='text-4xl font-bold ml-2 my-auto'>Career Dock</h1>
                </div>
                <div className='flex text-zinc-500 ml-16 mt-2 opacity-50'>
                    <h2 className='text-3xl'>Sign in to get started</h2>
                    <BsFillPersonCheckFill className='text-4xl ml-2' />
                </div>
            </section>
            <section className='w-[2/3] mx-auto mt-8'>
                <LoginForm />
            </section>
        </main>
    );
}

export default LoginPage