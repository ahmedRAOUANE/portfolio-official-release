type ContainerElement = "div" | "section" | "main";

interface ContainerProps {
    variant: ContainerElement;
    className?: string;
    children: React.ReactNode;
}

const Container = ({ variant, className, children }: ContainerProps) => {
    const Element = variant;

    return (
        <Element className={className}>
            {children}
        </Element>
    )
}

export default Container