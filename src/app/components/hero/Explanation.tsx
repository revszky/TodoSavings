import React, { useRef, useEffect } from "react";

interface IconData {
  id: number;
  icon: JSX.Element;
  title: string;
  description: string;
}

interface Props {
  iconData: IconData[];
  activeId: number | null | undefined;
  handleToggle: (id: number | null) => void;
}

const Explanation: React.FC<Props> = ({ iconData, activeId, handleToggle }) => {
  const descriptionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        descriptionRef.current &&
        !descriptionRef.current.contains(event.target as Node)
      ) {
        handleToggle(null);
      }
    };

    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleToggle(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleToggle]);

  return (
    <div className="w-full px-32" ref={descriptionRef}>
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
