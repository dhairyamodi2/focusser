import React, { useEffect } from "react";
import { Text } from "@chakra-ui/react";
import { ModalState } from "../types";

const Header: React.FC<ModalState> = ({isOpen, onOpen, onClose}) => {
    

    return (
        <div className="header">
            <span className="material-symbols-outlined">
                crisis_alert
            </span>
            <Text align={'center'} color='white' fontWeight={'bold'} fontSize={window.innerWidth > 710 ?'large' : 'medium'}>
                {window.innerWidth > 710 && "It's all a game of dopamine. You see that line in chart increasing, more determined you will be in  outperforming your past performance."}
                {window.innerWidth <= 710 && "Outperform your past performance, get the dopamine spike!"}
            </Text>
            <span className="material-symbols-outlined" onClick={onOpen}>
                question_mark
            </span>
            
        </div>
    )
}

export default Header;