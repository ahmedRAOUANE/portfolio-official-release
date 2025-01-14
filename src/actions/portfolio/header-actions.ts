"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

// TODO: complete the header actions, add validation, Error handling, Returns

/**
 * Get the header links from the database
 */
export const getHeaderLinks = async () => {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from("header_links")
        .select("*")

    if (error) {
        console.error("Failed to fetch header links:", error);
        return [];
    }

    return data;
}

export const getSingleHeaderLink = async (id: string) => {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from("header_links")
        .select("*")
        .eq("id", id)
        .single()

    if (error) {
        console.error("Failed to fetch header link:", error);
        return null;
    }

    return data;
}

export const createHeaderLink = async (formData: FormData) => {
    const supabase = await createClient();

    const { error } = await supabase
        .from("header_links")
        .insert({
            name: formData.get("name") as string,
            url: formData.get("href") as string,
            description: formData.get("description") as string,
            isVisible: formData.get("isActive")
        })

    if (error) {
        console.error("Failed to create header link:", error);
        // return null;
    }

    revalidatePath("/admin/header");

    // return true;
}

export const updateHeaderLink = async (formData: FormData, id: string) => {
    const supabase = await createClient();

    const { error } = await supabase
        .from("header_links")
        .update({
            name: formData.get("name") as string,
            url: formData.get("href") as string,
            description: formData.get("description") as string,
            isVisible: formData.get("isActive") as string
        })
        .eq("id", id)

    if (error) {
        console.error("Failed to update header link:", error);
        // return null;
    }

    revalidatePath("/admin/header");

    // return true;
}

export const deleteHeaderLink = async (id: string) => {
    const supabase = await createClient();

    const { error } = await supabase
        .from("header_links")
        .delete()
        .eq("id", id)

    if (error) {
        console.error("Failed to delete header link:", error);
        // return null;
    }

    revalidatePath("/admin/header");

    // return true;
}