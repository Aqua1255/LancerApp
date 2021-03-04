import React, { useState } from 'react';
import { PlusIcon } from './PlusIcon';
import { Button, ButtonProps } from './buttons/Button';
import { ButtonProps as SemanticButtonProps } from 'semantic-ui-react/dist/commonjs/elements/Button/Button';
import './FloatingMenu.css';

/*
some ideas
<FloatingMenu
    showOverlay // maybe
    animation="slide-up" // would be cool
    location="bottom right" // also would be cool>
    <FloatingButton icon={<AddTaskIcon/>} to={Routes.Tasks.Create} />
</FloatingMenu>

 */

interface FloatingButtonGroupProps {
    children: React.ReactElement<typeof FloatingButton> | React.ReactElement<typeof FloatingButton>[];
}

export const FloatingMenu = ({ children }: FloatingButtonGroupProps) => {
    const [isOpened, setIsOpened] = useState(false);

    const handleClick = () => {
        setIsOpened(!isOpened);
    };

    const isOpenedClassname = isOpened ? ' floating-menu-container--opened' : '';

    return (
        <div className={`floating-menu-container ${isOpenedClassname}`}>
            {isOpened ? (
                <div className="floating-menu-buttons">
                    {children}
                    <FloatingButton className="floating-button--clear" onClick={handleClick} icon={<ClearIcon />} />
                </div>
            ) : (
                <FloatingButton onClick={handleClick} icon={<PlusIcon />} />
            )}
        </div>
    );
};

const ClearIcon = () => {
    return <i className="material-icons">clear</i>;
};

interface FloatingButtonProps {
    label?: string;
}

export const FloatingButton: React.FC<FloatingButtonProps & ButtonProps & SemanticButtonProps> = ({
                                                                                                      children,
                                                                                                      label,
                                                                                                      className,
                                                                                                      ...rest
                                                                                                  }) => {
    return (
        <div className={`floating-button${className ? ` ${className}` : ''}`}>
            {label && <label>{label}</label>}
            <Button aria-label={label} {...rest}>
                {children}
            </Button>
        </div>
    );
};
