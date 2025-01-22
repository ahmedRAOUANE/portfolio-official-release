"use client";

import React, { useState } from "react";
import { createEditor, Descendant } from "slate";
import { Slate, Editable, withReact } from "slate-react";

// components
import Leaf from "./leaf";
import Element from "./element";
import Toolbar from "./toolbar";
import Section from "../section";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import UploadFile from "./upload-file";

interface TextareaProps {
    onEditorChange?: (editorValue: Descendant[]) => void;
    defaultValue?: Descendant[];
    index?: number;
}

const Textarea = ({ onEditorChange, defaultValue, index }: TextareaProps) => {
    const editorTypes = useSelector((state: RootState) => state.inputTypeSlice.inputType)

    const [editor] = useState(() => withReact(createEditor()));
    const initialValue: Descendant[] = defaultValue || [
        {
            type: "paragraph",
            children: [{ text: "" }],
        },
    ];

    const handleEdiorChange = (editorValue: Descendant[]) => {
    // console.log("editor content changed..") // pass
        if (onEditorChange) {
            onEditorChange(editorValue);
        }
    };

    const renderFeild = (index: number) => {
        if (editorTypes[index] === "component") {
            return (
                <div className="w-full h-full flex items-center justify-center">
                    <label htmlFor="component" className="flex">
                        <span>Select Component: </span>

                        <select name="component" id="component">
                            <option value="Component1">component 1</option>
                            <option value="Component 2">component 2</option>
                            <option value="Component 3">component 3</option>
                        </select>
                    </label>
                </div>
            )
        } else if (editorTypes[index] === "file") {
            return (
                <UploadFile />
            )
        }

        return (
            <Editable
                placeholder="Type something..."
                className="outline-none focus:outline-none"
                renderElement={Element}
                renderLeaf={Leaf}
            />
        )
    }

    return (
        <Slate editor={editor} initialValue={initialValue} onChange={handleEdiorChange}>
            <Section className="p-4 rounded-lg bg-white outline-1 shadow-md flex-1 flex flex-col gap-3">
                <Toolbar index={index} />

                <Section className="p-4 border border-gray-300 rounded-lg">
                    {renderFeild(index as number)}
                </Section>
            </Section>
        </Slate>
    );
};

export default Textarea;

