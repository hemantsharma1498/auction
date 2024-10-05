import React, { useState, ChangeEvent, FormEvent } from 'react';

export interface FormRow {
    name: string;
    label: string;
    type: string;
    placeholder?: string;
    description?: string;
}

interface DynamicFormProps<T> {
    rows: FormRow[];
    onSubmit: (data: Record<string, T>) => void;
    children?: React.ReactNode;
    className?: string;
}

function DynamicForm<T extends string | number>({ rows, onSubmit, children }: DynamicFormProps<T>) {
    const [formData, setFormData] = useState<Partial<Record<string, T>>>({});

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(formData as Record<string, T>);
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value as T,
        }));
    };

    return (
        <form onSubmit={handleSubmit}>
            {rows.map((row, index) => (
                <div key={index} className="form-row">
                    <label htmlFor={row.name}>{row.label}</label>
                    <input
                        type={row.type}
                        id={row.name}
                        name={row.name}
                        placeholder={row.placeholder}
                        value={formData[row.name] || ""}
                        onChange={handleInputChange}
                    />
                    {row.description && <p className="description">{row.description}</p>}
                </div>
            ))}
            {children /* Render children passed to the DynamicForm */}
        </form>
    );
}

export default DynamicForm;
