import React, { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    variant?: number
}

const Button: React.FC<ButtonProps> = ({children, variant = 0}) => {

    const variants = [
        `px-5 flex justify-center items-center h-16 w-auto rounded-[30px] border border-black `,
        `p-2 w-16 h-16 flex justify-center items-center rounded-full border border-black `,
    ]

    return (
        <button className={`${variants[variant]} cursor-pointer`}>{children}</button>
    )
}

export default Button;