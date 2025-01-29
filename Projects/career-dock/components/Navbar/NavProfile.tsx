interface Props {
    email: string | undefined;
}

const NavProfile = (props: Props) => {
    return (
        <div className='flex'>
            <p className='text-emerald-400 my-auto mx-4'>{props.email}</p>
            <button className='text-emerald-400 font-semibold border-2 border-emerald-400 py-1 px-2'>Sign out</button>
        </div>
    );
}

export default NavProfile