"use client"

import { MouseEventHandler } from "react";

interface Props{
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined
    icon: React.ReactElement
}

const PropButton:React.FC<Props> = ({onClick,icon}) => {
    

    return (
        <button onClick={onClick} className="bg-white rounded-full text-gray-600 p-[5px] transition hover:scale-110 active:scale-100">
            {icon}
        </button>
    );
}

export default PropButton;