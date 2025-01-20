"use server";

import { DataState, Tables } from "@/utils/types";
import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";

export const getAll = async (targetTable: Tables) => {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from(targetTable)
        .select("*")

    if (error) {
        console.error("Failed to fetch: ", error);
        return [];
    }

    return data;
}

export const getSingle = async (targetTable: Tables, id: string) => {
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

export const create = async <TData>(targetTable: Tables, formData: TData) => {
    const supabase = await createClient();

    const { error } = await supabase
        .from(targetTable)
        .insert(formData)

    if (error) {
        console.error(`Failed to create ${targetTable}:`, error);
        // return null;
    }

    revalidatePath(`/admin/${targetTable}`);

    // return true;
}

export const update = async <TData>(targetTable: Tables, id: string, newData: TData) => {
    const supabase = await createClient();

    const { error } = await supabase
        .from(targetTable)
        .update(newData)
        .eq("id", id)

    if (error) {
        console.error("Failed to update header link:", error);
        // return null;
    }

    revalidatePath("/admin/header");

    // return true;
}

export const deleteTarget = async (targetTable: Tables, id: string) => {
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