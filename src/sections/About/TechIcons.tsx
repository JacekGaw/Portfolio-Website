import React from "react";
import Button from "../../components/Button";

interface TechArrType {
    name: string;
    icon: string;
}

const TechIcons: React.FC<{label: string, techArr: TechArrType[]}> = ({label, techArr}) => {

    return (
        <div className="flex flex-col items-center lg:items-end gap-5">
            <p className="text-xl font-[600]">{label}</p>
            <div className="flex gap-2 lg:gap-3 flex-wrap justify-center lg:justify-end">
                {techArr.map((technology) => (
                    <div className="flex items-center p-3 border rounded-full" key={technology.name}><img src={technology.icon} alt={technology.name} className="h-4 xl:h-6 w-auto" /><p className="text-xs md:text-sm 2xl:text-base pl-2">{technology.name}</p></div>
                ))}
            </div>
          </div>
    )
}

export default TechIcons;