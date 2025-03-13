import React from "react";

const TechStack: React.FC<{ items: string[] }> = ({ items }) => {
  return (
    <>
      <div className=" flex justify-start items-center flex-wrap text-sm gap-2 font-[400] text-gray-500 dark:text-gray-300">
        <p className="w-1 h-1 rounded-full bg-gray-300"></p>
        {items.map((item, index) => (
          <div className="flex items-center gap-2" key={index}>
            <div>{item}</div>
            <p className="w-1 h-1 rounded-full bg-gray-300"></p>
          </div>
        ))}
      </div>
    </>
  );
};

export default TechStack;
