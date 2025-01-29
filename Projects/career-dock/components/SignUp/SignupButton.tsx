const SignupButton = ({loading}: {loading: boolean}) => {
    return (
        <button type='submit' disabled={loading} className='bg-stone-800 text-lg font-semibold py-1 px-2 text-emerald-400 border-2 border-emerald-400 hover:bg-emerald-400 hover:text-zinc-900 hover:scale-110 transition-all cursor-default'>Sign up</button>
    );
}

export default SignupButton