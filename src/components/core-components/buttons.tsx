type ButtonType = "button" | "submit" | "reset" | undefined;

interface ButtonProps {
    type?: ButtonType
    className?: string
    children: React.ReactNode
    onClick?: () => void
    disabled?: boolean
    active?: boolean
}

const Button = ({ type, className, children, onClick, disabled }: ButtonProps) => {
    return (
        <button type={type} className={className} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    )
}

export default Button;