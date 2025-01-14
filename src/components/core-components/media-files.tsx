import Image from "next/image";

type MediaTypes = "image" | "video";

interface MediaFilesProps {
    src: string;
    type: MediaTypes;
    alt: string;
    className?: string;
}

const MediaFile = ({ src, type, alt, className }: MediaFilesProps) => {
    if (type === "video") {
        <video src={src} className={className}></video>
    }

    return <Image src={src} alt={alt} priority className={className} />
}

export default MediaFile;