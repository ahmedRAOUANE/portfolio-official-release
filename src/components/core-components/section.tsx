type SectionElement = "section" | "div" | "article" | "main" | "nav" | "footer";

interface SectionProps {
    variant?: SectionElement;
    className?: string;
    children: React.ReactNode;
}

const Section = ({ variant, className, children }: SectionProps) => {
    const Element = variant || "div";

    return (
        <Element className={className}>
            {children}
        </Element>
    )
}

export default Section;