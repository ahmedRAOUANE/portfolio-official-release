import { ChangeEventHandler } from "react";
import Section from "./section";

type InputFields = "text" | "email" | "password" | "number" | "textarea" | "checkbox";

// type, name, and is are not optional for the accessability
interface InputFieldsProps {
    type: InputFields;
    name: string;
    id: string;
    placeholder?: string;
    required?: boolean;
    className?: string;
    label?: string;
    onChange?: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
    defaultValue?: string;
    checked?: boolean;
    defaultChecked?: boolean;
}

const InputField = ({
    type, name, id, placeholder, required = false,
    className, label, onChange, defaultValue, checked, defaultChecked
}: InputFieldsProps) => {
    if (type === "textarea") {
        return (
            <Section className={className}>
                <textarea
                    defaultValue={defaultValue}
                    onChange={onChange}
                    className={"focus:outline-none w-full"}
                    name={name}
                    id={id}
                    required={required}
                    placeholder={placeholder}
                />
                {label && <label htmlFor={id}>{label}</label>}
            </Section>
        )
    }

    return (
        <Section className={className}>
            <input
                defaultValue={defaultValue}
                className={`${type !== "checkbox" && "w-full focus:outline-none"}`}
                type={type}
                onChange={onChange}
                name={name}
                id={id}
                required={required}
                placeholder={placeholder}
                defaultChecked={defaultChecked}
                checked={checked}
            />
            {label && <label className="cursor-pointer" htmlFor={id}>{label}</label>}
        </Section>
    )
};

export default InputField;

