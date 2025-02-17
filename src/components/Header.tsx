import React from "react";

interface HeaderProps {
    children: string;
    className?: string;
    variant?: number;
    orientation?: "left" | "center" | "right"
}

const Header: React.FC<HeaderProps> = ({children,className, variant = 0, orientation = "left"}) => {

    const variants = [
        ` text-3xl font-[800] pb-5 border-b ${orientation == 'left' && "pr-[100px]"} ${orientation == 'right' && "pl-[100px]"} ${orientation == 'center' && "px-[100px]"}`,
    ]

    return (
        <h3 className={`${variants[variant]}  text-${orientation} ${className}`}>{children}</h3>
    )
}

export default Header;