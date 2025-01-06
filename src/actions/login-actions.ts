'use server'

import { createClient } from '@/lib/supabase/server'
import { getUserProfile } from '@/utils/data'
import { Session, User } from '@supabase/supabase-js'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { NextResponse } from 'next/server'

export async function login(formData: FormData) {
    const supabase = await createClient()

    const credentials = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    }

    if (!credentials || !credentials.email || !credentials.password) {
        return {
            message: "email or password is missing"
        }
    }

    const { error } = await supabase.auth.signInWithPassword(credentials)

    if (error) {
        return {
            message: error.message
        }
    }

    const { profile: { role } } = await getUserProfile();

    revalidatePath('/', 'layout')
    redirect(role === "admin" ? '/admin' : "/")
}

export async function signup(formData: FormData) {
    const supabase = await createClient()

    const credentials = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    }

    if (!credentials || !credentials.email || !credentials.password) {
        return {
            message: "email or password is missing"
        }
    }

    const { error, data } = await supabase.auth.signUp(credentials)

    if (error) {
        return {
            message: error.message
        }
    }

    if (data.user && !data.session) {
        return {
            message: "email is already exists"
        }
    }

    revalidatePath('/', 'layout')
    redirect("/")
}
