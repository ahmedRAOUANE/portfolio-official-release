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
    full = "w-full flex justify-center items-start p-5 container mx-auto",
    oneHalf = "w-1/2 flex-1",
    oneThird = "1/3",
    twoThirds = "2/3",
    oneFourth = "1/4",
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

export interface DataState {
    id?: string;
    name: string;
    description: string;
    children: Descendant[];
    isActive: boolean;
    layout: SectionSizes;
    metadata?: {
        createdAt: string; // for development puposes and will be changed later
        updatedAt: string; // for development puposes and will be changed later
    };
    // add other properties as needed
}

