"use server";

import { createClient } from "@/lib/supabase/server";
import { Tables } from "@/utils/types";
import { revalidatePath } from "next/cache";

const targetTable = Tables.sections;

export const getAllSections = async () => {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from(targetTable)
        .select("*")

    if (error) {
        console.error("Failed to fetch header links:", error);
        return [];
    }

    return data;
}

export const getSingleSection = async (id: string) => {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from(targetTable)
        .select("*")
        .eq("id", id)
        .single()

    if (error) {
        console.error("Failed to fetch header link:", error);
        return null;
    }

    return data;
}

export const createSection = async (formData: FormData) => {
    const supabase = await createClient();

    const { error } = await supabase
        .from(targetTable)
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

    revalidatePath("/admin/sections");

    // return true;
}

export const updateSection = async (id: string, newData: FormData) => {
    const supabase = await createClient();

    const { error } = await supabase
        .from(targetTable)
        .update({
            name: newData.get("name") as string,
            url: newData.get("href") as string,
            description: newData.get("description") as string,
            isVisible: newData.get("isActive") as string
        })
        .eq("id", id)

    if (error) {
        console.error("Failed to update header link:", error);
        // return null;
    }

    revalidatePath("/admin/header");

    // return true;
}

export const deleteSection = async (id: string) => {
    const supabase = await createClient();

    const { error } = await supabase
        .from(targetTable)
        .delete()
        .eq("id", id)

    if (error) {
        console.error("Failed to delete header link:", error);
        // return null;
    }

    revalidatePath("/admin/header");

    // return true;
}
