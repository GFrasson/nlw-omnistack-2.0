import React, { TextareaHTMLAttributes } from 'react';

import './styles.css';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {  // O TextareaHTMLAttributes contém todos as propriedades possíveis para a tag Textarea no html
    name: string;
    label: string;
}

const Textarea: React.FC<TextareaProps> = ({ label, name, ...rest }) => {
    return (
        <div className="textarea-block">
            <label htmlFor={name}>{label}</label>
            <textarea name={name} id={name} {...rest} />
        </div>
    );
}

export default Textarea;