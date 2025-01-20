"use client";

import React, { useState } from "react";
import { createEditor, Descendant } from "slate";
import { Slate, Editable, withReact } from "slate-react";

// components
import Leaf from "./leaf";
import Element from "./element";
import Toolbar from "./toolbar";
import Section from "../section";

interface TextareaProps {
    onEditorChange?: (editorValue: Descendant[]) => void;
    defaultValue?: Descendant[]
}

const Textarea = ({ onEditorChange, defaultValue }: TextareaProps) => {
    const [editor] = useState(() => withReact(createEditor()));
    const initialValue: Descendant[] = defaultValue ? defaultValue : [
        {
            type: "paragraph",
            children: [{ text: "" }],
        },
    ];

    const handleEdioreChange = (editorValue: Descendant[]) => {
        onEditorChange && onEditorChange(editorValue);
    };

    return (
        <Slate editor={editor} initialValue={initialValue} onChange={handleEdioreChange}>
            <Section className="p-4 rounded-lg bg-white outline-1 shadow-md flex flex-col gap-3">
                <Toolbar />

                <Section className="p-4 border border-gray-300 rounded-lg min-h-[200px]">
                    <Editable
                        placeholder="Type something..."
                        className="outline-none focus:outline-none"
                        renderElement={Element}
                        renderLeaf={Leaf}
                    // defaultValue={defaultValue}
                    />
                </Section>
            </Section>
        </Slate>
    );
};

export default Textarea;

