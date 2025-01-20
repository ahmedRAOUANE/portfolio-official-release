import Image from "next/image";
import { RenderElementProps } from "slate-react";

/**
 * a custom rendering function for element nodes
 * 
 * @param {RenderElementProps} { attributes, children, element }
 * @returns h1 | h2 | h3 | h4 | h5 | p
 */

const Element = ({ attributes, children, element }: RenderElementProps) => {
    switch (element.type) {
        case "heading-one":
            return (
                <h1 {...attributes} className="text-3xl mb-4">
                    {children}
                </h1>
            );
        case "heading-two":
            return (
                <h2 {...attributes} className="text-2xl mb-3">
                    {children}
                </h2>
            );
        case "heading-three":
            return (
                <h3 {...attributes} className="text-xl mb-2">
                    {children}
                </h3>
            );
        case "heading-four":
            return (
                <h4 {...attributes} className="text-lg mb-1">
                    {children}
                </h4>
            );
        case "heading-five":
            return (
                <h5 {...attributes} className="text-base">
                    {children}
                </h5>
            );
        case "paragraph":
            return (
                <p {...attributes} className="text-base mb-2">
                    {children}
                </p>
            );
        // case "image":
        //     return (
        //         <div>
        //             <Image src={"test"} alt="image" priority />
        //         </div>
        //     );
        default:
            return (
                <p {...attributes} className="text-base mb-2">
                    {children}
                </p>
            );
    }
};

export default Element;