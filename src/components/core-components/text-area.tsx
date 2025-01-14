"use client";

import React, { useState } from "react";
import { createEditor, Descendant, Element as SlateElement } from "slate";
import { Slate, Editable, withReact, RenderElementProps, RenderLeafProps } from "slate-react";

// components
import Toolbar from "../admin-dashboard/ui/toolbar";
import Section from "@/components/core-components/section";

// Define a custom rendering function for elements
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
        default:
            return (
                <p {...attributes} className="text-base mb-2">
                    {children}
                </p>
            );
    }
};

// Define a custom rendering function for leaf nodes (e.g., bold, italic)
const Leaf = ({ attributes, children, leaf }: RenderLeafProps) => {
    if (leaf.bold) {
        children = <strong>{children}</strong>;
    }
    if (leaf.italic) {
        children = <em>{children}</em>;
    }
    if (leaf.underline) {
        children = <u>{children}</u>;
    }
    if (leaf.code) {
        children = <code>{children}</code>;
    }
    return <span {...attributes}>{children}</span>;
};

const Textarea = () => {
    const [editor] = useState(() => withReact(createEditor()));
    const initialValue: Descendant[] = [
        {
            type: "paragraph",
            children: [{ text: "" }],
        },
    ];

    const handleCollectingData = (editorValue: Descendant[]) => {
        console.log(editorValue);
    };

    return (
        <Slate editor={editor} initialValue={initialValue} onChange={handleCollectingData}>
            <Section className="p-4 rounded-lg bg-white outline-1 shadow-md flex flex-col gap-3">
                <Toolbar />

                <Section className="p-4 border border-gray-300 rounded-lg min-h-[200px]">
                    <Editable
                        placeholder="Type something..."
                        className="outline-none focus:outline-none"
                        renderElement={Element}
                        renderLeaf={Leaf}
                    />
                </Section>
            </Section>
        </Slate>
    );
};

export default Textarea;

