import React, { InputHTMLAttributes } from 'react';

import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {  // O InputHTMLAttributes contém todos as propriedades possíveis para a tag input no html
    name: string;
    label: string;
}

const Input: React.FC<InputProps> = ({ label, name, ...rest }) => {
    return (
        <div className="input-block">
            <label htmlFor={name}>{label}</label>
            <input name={name} type="text" id={name} {...rest} />
        </div>
    );
}

export default Input;