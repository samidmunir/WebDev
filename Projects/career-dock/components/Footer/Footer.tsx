import Link from 'next/link';
import { BsFillGrid1X2Fill, BsFillHouseFill, BsFire, BsInfoCircleFill } from 'react-icons/bs'
const Footer = () => {
    return (
        <footer className='bg-stone-900 flex justify-center gap-32 pb-4'>
            <section className='pt-4'>
                <div className='flex'>
                    <BsFillGrid1X2Fill className='text-emerald-400 text-3xl' />
                    <h1 className='text-emerald-400 text-2xl ml-1 font-bold'>Career Dock</h1>
                </div>
                <h2 className='text-zinc-500 text-sm mt-1'>Track your career journey!</h2>
                <Link href='/login' className='block text-emerald-400 mt-2'>Login</Link>
                <Link href='/register' className='block text-emerald-400'>Register</Link>
                <Link href='/forgot-password' className='block text-emerald-400'>Reset password</Link>
            </section>
            <section className='pt-4 text-zinc-100'>
                <h1 className='text-xl font-semibold'>Services</h1>
                <p className='mt-9'>Branding</p>
                <p>Design</p>
                <p>Marketing</p>
            </section>
            <section className='pt-4 text-zinc-100'>
                <h1 className='text-xl font-semibold'>Company</h1>
                <p className='mt-9'>About</p>
                <p>Contact</p>
                <p>Pages</p>
            </section>
            <section className='pt-4 text-zinc-100'>
                <h1 className='text-xl font-semibold'>Legal</h1>
                <p className='mt-9'>Terms of use</p>
                <p>Privacy policy</p>
                <p>Cookie policy</p>
            </section>
        </footer>
    );
}

export default Footer