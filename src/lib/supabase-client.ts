import { createClient } from "@supabase/supabase-js";

const uspabaseUrl = process.env.SUPABASE_URL as string;
const supabaseAnonKey = process.env.SUPABASE_APIKEY as string;

if (!uspabaseUrl || !supabaseAnonKey) {
    throw new Error('Missing env variables');
}

export const supabase = createClient(uspabaseUrl, supabaseAnonKey);
