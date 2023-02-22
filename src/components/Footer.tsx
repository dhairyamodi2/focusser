import React from "react";
import { Text } from '@chakra-ui/react'
import {ReactComponent as Logo} from '../assets/github-mark.svg'
const Footer: React.FC = () => {
    return (
        <div className="footer">
            <p className="footer">Made with&nbsp;<span className="heart material-symbols-outlined">
                favorite
            </span>&nbsp;by&nbsp;&nbsp;<a href="https://github.com/dhairyam2002" target="_blank"><b>Dhairya Modi</b></a></p>
        </div>
    )
}

export default Footer;