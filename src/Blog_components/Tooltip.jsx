import React,{useState} from "react";

export default function Tooltip({text,children}){
    const [isVisible,setIsVisible]= useState(false)
    return(
        <div
         className="tooltip-container inline-block relative"
         onMouseEnter={() => setIsVisible(true)}
         onMouseLeave={() => setIsVisible(false)}

        >
        {children}
        {isVisible && <div className="tooltip absolute top-5 left-2 translate-y-3 bg-black bg-opacity-80 text-xs p-1 z-20 min-w-28  ">{text}</div>}

        </div>
    )
}