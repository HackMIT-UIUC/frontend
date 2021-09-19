import React from 'react'
import {Row,Col,Text,Button,Icon} from 'atomize'
import classes from './styles.module.css'
function Navbar() {
    return (
        <div className = {classes.navbar} top = '1rem' d = "flex" flexDir = "row" w = "100vw" justifyItems="center">
            <div/>
            <Button
                h = "5vh"
                w = "6vw"
                prefix={
                <Icon
                    name="History"
                    size="16px"
                    color="white"
                />
                }
                bg={"accent"}
                hoverBg="warning800"
                rounded="circle"
                shadow="3"
                hoverShadow="4"
            >
            Forum
            </Button>

            <Button
                h = "5vh"
                w = "6vw"
                prefix={
                <Icon
                    name="InfoSolid"
                    size="16px"
                    color="white"
                />
                }
                bg={"accent"}
                hoverBg="warning800"
                rounded="circle"
                shadow="3"
                hoverShadow="4"
            >
                About
            </Button>
            
            <Button
                h = "5vh"
                w = "6vw"
                prefix={
                <Icon
                    name="UserSolid"
                    size="16px"
                    color="white"
                />
                }
                bg={"accent"}
                hoverBg="warning800"
                rounded="circle"
                shadow="3"
                hoverShadow="4"
            >
                Signup
            </Button>
            <Button
                h = "5vh"
                w = "6vw"
                prefix={
                <Icon
                    name="LongRight"
                    size="16px"
                    color="white"
                />
                }
                bg={"accent"}
                hoverBg="warning800"
                rounded="circle"
                shadow="3"
                hoverShadow="4"
            >
                Login
            </Button>
        </div>
    )
}

export default Navbar
