import React, { ReactElement } from 'react';
import { Button as SemanticButton, ButtonProps as SemanticButtonProps } from 'semantic-ui-react';
//Need to add module
import './Button.css';

export interface ButtonProps {
    size?: 'small' | 'regular';
    variant?: 'completion' | 'outline' | 'text' | 'standard';
    icon?: ReactElement;
    iconContainerClassName?: string;
}

export const Button: React.FC<ButtonProps & SemanticButtonProps> = (props) => {
    const { icon, iconContainerClassName, size, variant, ...remainingProps } = props;

    const providedClassName = props.className || '';
    const variantClass = variant || 'standard';
    const sizeClass = size || 'regular';

    const className = `${variantClass} ${sizeClass} ${providedClassName}`;

    return (
        <SemanticButton {...remainingProps} className={className}>
            {icon && <div className={`button-icon-container ${iconContainerClassName || ''}`}>{icon}</div>}
            {props.children}
        </SemanticButton>
    );
};
