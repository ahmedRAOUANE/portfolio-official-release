import { Descendant } from "slate";

export enum Tables {
    headerLinks = "header-links",
    components = "components",
    sections = "sections",
    footer = "footer",
    featureFlags = "feature-flags",
    portfolio = "portfolio",
    profiles = "profiles",
    media = "media",
}

export interface MediaSchema {
    id: string;
    fileName: string;
    fileUrl: string;
    fileType: string;
    createdAt: string;
    updatedAt: string;
}

/**
 * This enum defines the section layout
 */
export enum SectionSizes {
    full = "1/1 w-full flex flex-wrap justify-start items-start gap-3",
    oneHalf = "1/2 flex justify-start flex-wrap items-start gap-3",
    oneThird = "1/3 w-full flex flex-wrap justify-start items-start gap-3",
    twoThirds = "2/3",
    oneFourth = "1/4 w-full flex flex-wrap justify-start items-start gap-3",
    twoFourth = "2/4",
    threeFourth = "3/4",
}

/** 
    * Extend Slate's types to include our custom types 
*/
declare module "slate" {
    interface CustomTypes {
        Element: CustomElement;
        Text: CustomText;
    }
}

/**
 * This is the syntax tree of the data state
 */
export type CustomElement = {
    type: Text | Media | Container;
    props?: Partial<{
        id: string;
        name: string;
        className: string;
        isActive: boolean;
        description: string;
        layout: SectionSizes;
        metadata: {
            createdAt: string;
            updatedAt: string;
        };
    }>;
    children?: CustomElement[] | ChildContent[];
};

export class Element implements CustomElement {
    type: Text | Media | Container;
    props?: Partial<{
        id: string;
        name: string;
        className: string;
        isActive: boolean;
        description: string;
        layout: SectionSizes;
        metadata: {
            createdAt: string;
            updatedAt: string;
        };
    }> | undefined;
    children?: CustomElement[] | ChildContent[] | undefined;
    constructor(
        type: Text | Media | Container,
        props: Partial<{
            id: string;
            name: string;
            className: string;
            isActive: boolean;
            description: string;
            layout: SectionSizes;
            metadata: {
                createdAt: string;
                updatedAt: string;
            };
        }>,
        children: CustomElement[] | ChildContent[] | undefined
    ) {
        this.type = type;
        this.props = props;
        this.children = children;
    }

    toJSON() {
        return {
            type: this.type,
            props: this.props,
            children: this.children?.map(
                (child: CustomElement | ChildContent): (CustomElement | ChildContent) => {
                    if (child instanceof Element) {
                        return child.toJSON();
                    }

                    return child;
                }
            ),
        };
    }
}

export type Text = "paragraph" | "heading-one" | "heading-two" | "heading-three" | "heading-four" | "heading-five" | "heading-six";
export type Media = "image" | "video";
export type Container = "container" | "section";

export type FontStyle = "bold" | "italic" | "underline" | "code";
//? these features are not yet implemented 
export type Alignment = "left" | "center" | "right";
export type Size = "small" | "medium" | "large"; 

export type CustomText = {
    text: string;
    bold?: boolean;
    italic?: boolean;
    underline?: boolean,
    code?: boolean;
};

export type MediaElement = {
    src: string;
    type: Media;
    alt: string;
}

export type ChildContent = CustomText | Descendant | MediaElement;

/**
 * Data state Children property type
 */
export interface ChildType {
    childId?: string;
    className: string;
    children: ChildContent[];
}

/**
 *  custom response schema used to handle api null | undefined | error responses
 */
export interface CustomeResponse {
    success: boolean,
    message: string,
    error?: unknown | null
}

