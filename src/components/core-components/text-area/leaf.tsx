import { RenderLeafProps } from "slate-react";

/**
 *  a custom rendering function for leaf nodes (e.g., bold, italic)
 * 
 * @param {RenderLeafProps} { attributes, children, leaf } 
 * @returns span | strong | em | u | code
 */

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

export default Leaf;