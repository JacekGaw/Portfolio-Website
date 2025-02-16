import React, { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    variant?: number;
    size?: "sm" | "base",
    onClick?: () => void,
    className?: string,
    type?: "button" | "submit" | "reset" | undefined
}

const Button: React.FC<ButtonProps> = ({children, variant = 0, size = 'base', onClick, className, type}) => {

    const variants = [
        ` flex justify-center items-center ${size == 'base' && "h-16 px-5"} ${size == 'sm' && "h-12 px-3"} w-auto rounded-[30px] border border-black `,
        `${size == 'base' && "h-16 w-16 p-2"} ${size == 'sm' && "h-12 w-12 p-2"} flex justify-center items-center rounded-full border border-black `,
    ]

    return (
        <button onClick={onClick} className={`${variants[variant]} cursor-pointer ${className}`} type={type}>{children}</button>
    )
}

export default Button;