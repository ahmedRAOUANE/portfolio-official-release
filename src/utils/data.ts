import { createClient } from "@/lib/supabase/server";

export const getUserProfile = async () => {
    const supabase = await createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
        return { user: null, profile: null };
    }

    const { data: profile } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user?.id)
        .single();

    return { user, profile };
}

export const getProfile = async () => {
}