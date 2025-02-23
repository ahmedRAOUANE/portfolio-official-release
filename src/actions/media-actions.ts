"use server";

import { createClient } from "@/lib/supabase/server";
import { Tables } from "@/utils/types";

const targetTable = Tables.media;

export const uploadMedia = async (files: FileList) => {
    const supabase = await createClient();

    try {
        const uploadResults = [];

        for (const file of Array.from(files)) {
            const fileName = `${Date.now()}-${file.name}`;

            // uplaod the file to supabase storage
            const { data, error } = await supabase.storage
                .from("portfolio-media")
                .upload(fileName, file);

            if (error) {
                console.error("Failed to upload media:", error);
                uploadResults.push({ fileName, success: false, data });
                return null; // stop the upload process -> use contenue if you want to continue uploading the other files
                // continue; // skip to the next file
            }

            // get the url of the uploaded file
            const { data: urlData } = await supabase.storage
                .from("portfolio-media")
                .getPublicUrl(fileName);

            // store file data in media table
            const fileData = {
                fileName: file.name,
                fileSize: file.size,
                fileType: file.type,
                fileExtension: file.name.split(".").pop(),
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
                fileUrl: urlData.publicUrl,
            };

            const { error: mediaError } = await supabase
                .from(targetTable)
                .insert(fileData)

            if (mediaError) {
                console.error("Failed to create media data:", mediaError);
                uploadResults.push({ fileName, success: false, data });
                return null; // stop the upload process -> use contenue if you want to continue uploading the other files
                // continue; // skip to the next file
            }

            uploadResults.push({ fileName, success: true, data: {...data, publicUrl: urlData.publicUrl, fileType: file.type} });
        }

        return uploadResults;
    } catch (error) {
        console.log("error uploading media: ", error);
        throw error;
    }
}

