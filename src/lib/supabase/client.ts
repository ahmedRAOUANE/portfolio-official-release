
import { supabaseAnonKey, supabaseUrl } from "@/utils/env-vars";
import { createBrowserClient } from "@supabase/ssr";

export const createClient = () =>
    createBrowserClient(
        supabaseUrl,
        supabaseAnonKey,
    );
