import React, { ReactNode } from "react";
import { motion } from "motion/react";

interface ButtonProps {
    children: ReactNode;
    variant?: number;
    size?: "sm" | "base",
    onClick?: () => void,
    className?: string,
    type?: "button" | "submit" | "reset" | undefined
    disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({children, variant = 0, size = 'base', onClick, className, type, disabled}) => {

    const variants = [
        ` flex justify-center items-center ${size == 'base' && "h-16 px-5"} ${size == 'sm' && "h-12 px-3"} w-auto rounded-[30px] border border-black dark:border-gray-100 `,
        `${size == 'base' && "h-16 w-16 p-2"} ${size == 'sm' && "h-12 w-12 p-2"} flex justify-center items-center rounded-full border border-black dark:border-gray-100`,
    ]

    return (
        <motion.button
        whileHover={{scale: 1.1}}
        whileTap={{scale: 0.9}}
        onClick={onClick} className={`${variants[variant]} cursor-pointer ${className} ${disabled && "bg-gray-200"}`} type={type} disabled={disabled}>{children}</motion.button>
    )
}

export default Button;