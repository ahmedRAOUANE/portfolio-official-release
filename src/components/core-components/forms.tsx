// type FormType = 

import { FormEventHandler } from "react";

interface FormProps {
    className?: string;
    children: React.ReactNode;
    action?: (formData: FormData) => void;
    onSubmit?: FormEventHandler<HTMLFormElement>;
}

const Form = ({ className, children, onSubmit, action }: FormProps) => {
    return (
        <form
            className={className}
            onSubmit={onSubmit}
            action={action}
        >
            {children}
        </form>
    )
}

export default Form;