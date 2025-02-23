import { CustomElement, Element } from "../types";
import { ASTNode } from "./ast-nodes";

/**
 * This function collects the data into one syntax tree
 * @param data 
 * @returns ASTNode
 */
export const toAST = (data: { id: string, content: CustomElement[] }[]) => {
    let ASTNodeArray: CustomElement[] = [];

    data.forEach((item) => {
        if (Array.isArray(item.content)) {
            ASTNodeArray.push(...item.content)
        } else {
            ASTNodeArray.push(item.content)
        }
    })

    return ASTNodeArray;
}

