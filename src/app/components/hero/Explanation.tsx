import React from "react";

interface IconData {
  id: number;
  icon: JSX.Element;
  title: string;
  description: string;
}

interface Props {
  iconData: IconData[];
  activeId: number | null;
  handleToggle: (id: number) => void;
}

const Explanation: React.FC<Props> = ({ iconData, activeId, handleToggle }) => {
  return (
    <div className="w-full px-32">
      <div className="w-full flex items-start justify-between relative">
        {iconData.map((item) => (
          <div
            key={item.id}
            className="p-2 flex flex-col items-center justify-center cursor-pointer"
            onClick={() => handleToggle(item.id)}
          >
            {item.icon}

            <div
              className={`max-w-[300px] w-full p-2 text-center absolute  ${
                activeId === item.id
                  ? "top-28 opacity-100 duration-500"
                  : "opacity-0 top-0 duration-200"
              }`}
            >
              <p>{item.description}</p>
            </div>

            <div className="max-w-[250px] p-2 text-center">
              <h3 className="text-lg font-bold">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explanation;
