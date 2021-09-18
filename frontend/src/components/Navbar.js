import React from 'react'
import {Row,Col,Text} from 'atomize'
function Navbar() {
    return (
        <Row pos = 'fixed' top = '1rem' d = "flex" flexDir = "row" w = "100vw" justifyItems="center">
            <Col size = "9"/>
            <Col><Text fontFamily="main" textSize= "2.6vw" >Forum</Text></Col>
            <Col><Text fontFamily="main" textSize="2.6vw" >About</Text></Col>
            <Col><Text fontFamily="main" textSize="2.6vw">Signup</Text></Col>
            <Col><Text fontFamily="main" textSize="2.6vw" >Logo</Text></Col>
            <Col><Text fontFamily="main" textSize="2.6vw" >Login</Text></Col>
        </Row>
    )
}

export default Navbar
