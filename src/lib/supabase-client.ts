import { createClient } from "@supabase/supabase-js";

const uspabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_APIKEY as string;

if (!uspabaseUrl || !supabaseAnonKey) {
    throw new Error('Missing env variables');
}

export const supabase = createClient(uspabaseUrl, supabaseAnonKey);