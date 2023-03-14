import React, { useState } from "react";

function Tabs({ children }) {
    const [activeTab, setActiveTab] = useState(0);
    const handleClick = (index) => {
      setActiveTab(index);
    };
  
    return (
      <div className="w-full">
        <div className="flex justify-center">
          {children.map((child, index) => (
            <button
              key={index}
              className={`${
                activeTab === index
                  ? "border-b-2 border-tabFocused text-tabFocused px-8"
                  : "border-b-2 border-beije text-black text-opacity-60 px-auto px-8"
              } py-2 px-4 focus:outline-none`}
              onClick={() => handleClick(index)}
            >
              {child.props.label}
            </button>
          ))}
        </div>
        {children[activeTab]}
      </div>
    );
  }

export default Tabs;
  
