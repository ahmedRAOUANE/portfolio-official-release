// type FormType = 

import { FormEventHandler } from "react";

interface FormProps {
    className?: string;
    children: React.ReactNode;
    action?: (formData: FormData) => void;
    onSubmit?: FormEventHandler<HTMLFormElement>;
}

const Form = ({ className, children }: FormProps) => {
    return (
        <form
            className={className}
        // onSubmit={(e) => { e.preventDefault(); action(new FormData(e.currentTarget)) }}
        // action={action}
        >
            {children}
        </form>
    )
}

export default Form;