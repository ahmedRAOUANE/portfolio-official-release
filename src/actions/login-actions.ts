'use server'

import { createClient } from '@/lib/supabase/server'
import { getUserProfile } from '@/utils/data'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function login(formData: FormData) {
    const supabase = await createClient()

    // type-casting here for convenience
    // in practice, you should validate your inputs
    const credentials = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    }

    const { error } = await supabase.auth.signInWithPassword(credentials)

    if (error) {
        redirect('/error')
    }

    const { profile: { role } } = await getUserProfile();

    revalidatePath('/', 'layout')
    redirect(role === "admin" ? '/admin' : "/")
}

export async function signup(formData: FormData) {
    const supabase = await createClient()

    // type-casting here for convenience
    // in practice, you should validate your inputs
    const credentials = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    }

    const { error } = await supabase.auth.signUp(credentials)

    if (error) {
        redirect('/error')
    }

    revalidatePath('/', 'layout')
    redirect("/")
}

export async function signout() {
    const result = await fetch("http://localhost:3000/api/auth/signout", {
        method: "POST",
        credentials: "include"
    });
    const response = result.json();
    console.log("response: ", response);

    return response;
}