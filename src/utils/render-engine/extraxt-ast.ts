import { CustomElement } from "../types";

/**
 * This function collects the data into one syntax tree
 * @param data 
 * @returns ASTNode
 */
export const toAST = (data: { id: string, content: CustomElement[] }[]) => {
    const ASTNodeArray: CustomElement[] = [];

    data.forEach((item) => {
        if (Array.isArray(item.content)) {
            ASTNodeArray.push(...item.content)
        } else {
            ASTNodeArray.push(item.content)
        }
    })

    return ASTNodeArray;
}

