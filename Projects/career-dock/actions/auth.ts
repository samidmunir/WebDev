'use server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import { headers } from 'next/headers'

export async function signUp(formData: FormData) {
    const supabase = await createClient();
    const credentials = {
        username: formData.get('username') as string,
        email: formData.get('email') as string,
        password: formData.get('password') as string,
        dob: formData.get('dob') as string,
        employed: formData.get('employed') as string,
    };

    const {error, data} = await supabase
        .auth
        .signUp({
            email: credentials.email,
            password: credentials.password,
            options: {
                data: {
                    username: credentials.username,
                    dob: credentials.dob,
                    employed: credentials.employed,
                },
            },
    });

    if (error) {
        return {
            status: error?.message,
            user: null,
        };
    } else if (data?.user?.identities?.length === 0) {
        return {
            status: 'User with this email already exists. Please login.',
        };
    }

    revalidatePath('/', 'layout');

    return {status: 'success', user: data.user};
}

export async function signIn(formData: FormData) {
    const supabase = await createClient();

    const credentials = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    };

    const {data, error} = await supabase
        .auth
        .signInWithPassword(credentials);

    if (error) {
        return {
            status: error?.message,
            user: null,
        };
    }

    const {data: existingUser} = await supabase
        .from('users')
        .select('*')
        .eq('email', credentials?.email)
        .limit(1)
        .single();

    if (!existingUser) {
        const {error: insertError} = await supabase
            .from('users')
            .insert({
                email: data?.user.email,
                username: data?.user?.user_metadata?.username,
                dob: data?.user?.user_metadata?.dob,
                employed: data?.user?.user_metadata?.employed,
        });

        if (insertError) {
            return {
                status: insertError?.message,
                user: null,
            };
        }
    }

    revalidatePath('/', 'layout');

    return {status: 'success', user: data.user};
}

export async function signOut() {
    const supabase = await createClient();

    const {error} = await supabase
        .auth
        .signOut();
    
    if (error) {
        redirect('/error');
    }

    revalidatePath('/', 'layout');
    redirect('/login');
}

export async function getUserSession() {
    const supabase = await createClient();
    const {data, error} = await supabase
        .auth
        .getUser();

    if (error) {
        return null;
    }

    return {status: 'success', user: data?.user};
}