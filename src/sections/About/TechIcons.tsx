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
            <div className="flex gap-2 lg:gap-5 flex-wrap justify-center lg:justify-end">
                {techArr.map((technology) => (
                    <Button size="sm" key={technology.name}><img src={technology.icon} alt={technology.name} className="h-6 lg:h-6 w-auto" /><p className="pl-2">{technology.name}</p></Button>
                ))}
            </div>
          </div>
    )
}

export default TechIcons;