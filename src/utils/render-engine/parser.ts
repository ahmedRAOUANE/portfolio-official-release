import { CustomElement } from "../types";
import { toAST } from "./extraxt-ast";
import parse from "./components-map";

export const render = async (data: {id: string, content: CustomElement[]}[]) => {
    const ast = toAST(data);
    
    return parse(ast);
};
