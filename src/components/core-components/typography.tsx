type TypographyElement = "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface TypographyProps {
    variant?: TypographyElement;
    className?: string;
    children: React.ReactNode;
    contentEditable?: boolean;
    onInput?: () => void;
    ref?: React.Ref<HTMLParagraphElement | HTMLHeadingElement>
}

const Typography = ({ variant, className, children, contentEditable, ref, onInput }: TypographyProps) => {
    const Element = variant || "p";

    return (
        <Element className={className} contentEditable={contentEditable} ref={ref} onInput={onInput}>
            {children}
        </Element>
    )
}

export default Typography;