"use client";

import { ChangeEvent, useRef, useState } from "react";

const UploadFile = () => {
    const [files, setFiles] = useState<File[]>([]);

    const inputFileRef = useRef(null);

    const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;
        const file = e.target.files[0];
        setFiles(prev => [...prev, file]);

        console.log("files: ", files);
    };

    return (
        <div className="w-full h-full p-3 flex items-center justify-center">
            <label htmlFor="file" className="flex">
                <span className="bg-gray-400 p-2 cursor-pointer rounded-lg shadow">Chose file</span>

                <input
                    ref={inputFileRef}
                    type="file"
                    name="file"
                    id="file"
                    className="hidden"
                    onChange={handleFileUpload}
                />
            </label>
        </div>
    )
}

export default UploadFile