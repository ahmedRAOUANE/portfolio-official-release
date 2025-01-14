"use client";

import { useSlate } from "slate-react";
import { BaseEditor, Editor, Element as SlateElement, Transforms } from "slate";

// Icons
import { MdTitle, MdFormatBold, MdFormatItalic, MdOutlineFormatUnderlined } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { FontStyle, Text } from "@/utils/types";

const Toolbar = () => {
    const editor = useSlate();

    // Handle heading level change
    const handleTextTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const format = event.target.value as Text;

        // Apply the selected heading level to the current block
        Transforms.setNodes(editor, {
            type: format,
        });
    };

    return (
        <div className="flex gap-2 p-2 border border-gray-300 rounded-lg bg-white shadow-sm">
            {/* Dropdown for text type */}
            <label
                htmlFor="textType"
                title="Text Type"
                className="flex gap-2 items-center p-2 rounded-lg hover:bg-gray-100 cursor-pointer"
            >
                <span><MdTitle /></span>
                <select
                    name="textType"
                    id="textType"
                    onChange={handleTextTypeChange}
                    className="bg-transparent outline-none cursor-pointer"
                >
                    <option value="paragraph" className="">paragraph</option>
                    <option value="heading-one" className="text-2xl">H1</option>
                    <option value="heading-two" className="text-xl">H2</option>
                    <option value="heading-three" className="text-lg">H3</option>
                    <option value="heading-four" className="text-base">H4</option>
                    <option value="heading-five" className="text-sm">H5</option>
                </select>
            </label>

            {/* Button for Bold */}
            <StyleButton format="bold" icon={<MdFormatBold />} />

            {/* Button for Italic */}
            <StyleButton format="italic" icon={<MdFormatItalic />} />

            {/* Button for Underline */}
            <StyleButton format="underline" icon={<MdOutlineFormatUnderlined />} />

            {/* Button for Code */}
            <StyleButton format="code" icon={<FaCode />} />
        </div>
    );
};

// Button component for toggling text and title
const MarkButton = ({ format, icon }: { format: Text; icon: React.ReactNode }) => {
    const editor = useSlate();

    const handleClick = () => {
        // Toggle between paragraph and heading
        const newProperties: Partial<SlateElement> = {
            type: format
        };
        Transforms.setNodes(editor, newProperties);
    };

    return (
        <button
            title={format}
            type="button"
            className={`p-2 rounded-lg hover:bg-gray-100 ${isBlockActive(editor, format)
                ? "bg-blue-100 text-blue-600"
                : "text-gray-600"
                }`}
            onMouseDown={(e) => {
                e.preventDefault();
                handleClick();
            }}
        >
            {icon}
        </button>
    );
};

const StyleButton = ({ format, icon }: { format: FontStyle; icon: React.ReactNode }) => {
    const editor = useSlate();
    const LIST_TYPES: FontStyle[] = ["bold", "italic", "underline", "code"];

    const handleClick = () => {
        // Toggle bold, italic, underline, or code
        const isActive = isMarkActive(editor, format);
        if (isActive) {
            Editor.removeMark(editor, format);
        } else {
            Editor.addMark(editor, format, true);
        }
    };

    return (
        <button
            title={format}
            type="button"
            className={`p-2 rounded-lg hover:bg-gray-100 ${isMarkActive(editor, format)
                ? "bg-blue-100 text-blue-600"
                : "text-gray-600"
                }`}
            onMouseDown={(e) => {
                e.preventDefault();
                handleClick();
            }}
        >
            {icon}
        </button>
    )
}

// Helper function to check if a block is active
const isBlockActive = (editor: BaseEditor, format: Text) => {
    const [match] = Editor.nodes(editor, {
        match: (n) =>
            !Editor.isEditor(n) &&
            SlateElement.isElement(n) &&
            n.type === format,
    });
    return !!match;
};

// Helper function to check if a mark is active
const isMarkActive = (editor: BaseEditor, format: FontStyle) => {
    const marks = Editor.marks(editor);
    return marks ? marks[format] === true : false;
};

export default Toolbar;

