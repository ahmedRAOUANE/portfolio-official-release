export type NodeType = "element" | "text";

export type ASTNode = {
    type: NodeType;
    value: string;
    children: ASTNode[];
    props: Record<string, unknown>;
};