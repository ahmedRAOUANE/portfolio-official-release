import { Descendant } from "slate";

export enum Tables {
    headerLinks = "header-links",
    components = "components",
    sections = "sections",
    footer = "footer",
    featureFlags = "feature-flags",
    portfolio = "portfolio",
    profiles = "profiles",
    portfolioMedia = "media",
}

export interface MediaSchema {
    id: string;
    fileName: string;
    fileUrl: string;
    fileType: string;
    createdAt: string;
    updatedAt: string;
}

export enum SectionSizes {
    full = "1/1 w-full flex flex-wrap justify-start items-start gap-3",
    oneHalf = "1/2 flex justify-start flex-wrap items-start gap-3",
    oneThird = "1/3 w-full flex flex-wrap justify-start items-start gap-3",
    twoThirds = "2/3",
    oneFourth = "1/4 w-full flex flex-wrap justify-start items-start gap-3",
    twoFourth = "2/4",
    threeFourth = "3/4",
}

export type Text = "paragraph" | "heading-one" | "heading-two" | "heading-three" | "heading-four" | "heading-five";
export type Alignment = "left" | "center" | "right";
export type FontStyle = "bold" | "italic" | "underline" | "code";

// the size feature is not yet implemented
export type Size = "small" | "medium" | "large"; 

// Extend Slate's types to include our custom types
declare module "slate" {
    interface CustomTypes {
        Element: CustomElement;
        Text: CustomText;
    }
}

// Define custom element types
export type CustomElement = { type: Text; children: CustomText[] };
export type CustomText = { text: string; bold?: boolean; italic?: boolean; underline?: boolean, code?: boolean };

export interface ChildType {
    childId?: string;
    className: string;
    children: Descendant[]
}

export interface DataState {
    id?: string;
    name: string;
    description: string;
    children: ChildType[];
    isActive: boolean;
    layout: SectionSizes;
    metadata?: {
        createdAt: string; // for development puposes and will be changed later
        updatedAt: string; // for development puposes and will be changed later
    };
    // add other properties as needed
}

