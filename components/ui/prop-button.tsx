import { IconButton } from "@mui/material";
import { MouseEventHandler } from "react";

interface Props{
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined
    icon: React.ReactElement
}

const PropButton:React.FC<Props> = ({onClick,icon}) => {
    

    return (
        <IconButton onClick={onClick} className="bg-white" sx={{
            transition: 'scale 0.5s',
            '&:hover': {
                scale:'120%',
                backgroundColor:"white"
            }
        }}>
            {icon}
        </IconButton>
    );
}

export default PropButton;