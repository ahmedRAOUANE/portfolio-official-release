"use client";

import { uploadMedia } from "@/actions/portfolio/media-actions";
import { setMediaContent } from "@/store/slices/data";
import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import Image from "next/image";

const UploadFile = ({ sectionIndex }: { sectionIndex: number }) => {
    const dispatch = useDispatch();

    const [files, setFiles] = useState<FileList | null>(null);
    const [loading, setLoading] = useState(false);
    const [uploadResults, setUploadResults] = useState<Array<{ fileName: string; success: boolean; data?: { path: string, publicUrl: string, id: string } }>>([]);

    const handleFileUpload = async (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files || e.target.files.length === 0) return;

        setLoading(true);
        setFiles(e.target.files);

        try {
            const results = await uploadMedia(e.target.files);
            setUploadResults(results || []);
            console.log("results: ", results);
            setLoading(false);
            results?.map(result => dispatch(setMediaContent({ index: sectionIndex, src: result.data.publicUrl, alt: result.fileName, type: "image" })));
        } catch (error) {
            console.error("Failed to upload media:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={`w-full h-full flex ${files ? "flex-col gap-5 items-start justify-start" : "items-center justify-center"}`}>
            <label htmlFor="file" className="flex">
                <span className="bg-gray-400 p-2 cursor-pointer rounded-lg shadow">Chose file</span>

                <input
                    multiple
                    type="file"
                    name="file"
                    id="file"
                    className="hidden"
                    onChange={handleFileUpload}
                />
            </label>

            {/* map the files and display them */}
            <div className="flex gap-5 flex-wrap">
                {loading ? files && Array.from(files).map((file) => (
                    file.type.startsWith("image") && (
                        <div key={file.name} className={`relative animate-pulse after:content-['...'] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[rgba(0,0,0,0.5)] after:z-10 after:flex after:items-center after:justify-center after:text-white`}>
                            <Image width={100} height={100} priority src={URL.createObjectURL(file)} alt={file.name} />
                        </div>
                    )
                )) : uploadResults && uploadResults.map((result) => (
                    <div key={result.fileName} className={`relative`}>
                        <Image width={100} height={100} priority src={result.data?.publicUrl || ""} alt={result.fileName} />
                    </div>
                ))}
            </div>

            {/* <div className="flex gap-5 flex-wrap">
                {uploadResults ? uploadResults.map((result) => (
                    <div key={result.fileName} className={`relative ${loading ? "animate-pulse after:content-['...'] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[rgba(0,0,0,0.5)] after:z-10 after:flex after:items-center after:justify-center after:text-white" : ""}`}>
                        <Image width={100} height={100} priority src={result.data?.fullPath || ""} alt={result.fileName} />
                    </div>
                )) : files && Array.from(files).map((file) => (
                    file.type.startsWith("image") && (
                        <div key={file.name} className={`relative ${loading ? "animate-pulse after:content-['...'] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[rgba(0,0,0,0.5)] after:z-10 after:flex after:items-center after:justify-center after:text-white" : ""}`}>
                            <Image width={100} height={100} priority src={URL.createObjectURL(file)} alt={file.name} />
                        </div>
                    )
                ))}
            </div> */}
        </div>
    )
}

export default UploadFile

