import React from 'react'
import {Div, Container, Row, Col,Text} from 'atomize'
import Navbar from './components/Navbar'
import Content from './components/Content'
function App() {
    return (
        <Container d="flex" flexDir = "column" align = "center" justify="center" bg = {"primary"} w = "100vw" h = "100vh">
             <Navbar/>
            <Row align = "center" justify="center" d = "flex" flexDir = "column">
                <Row><Text fontFamily="main" textSize="8.5vw" m = "0.1rem">[WEBSITE NAME]</Text></Row>
                <Row><Text fontFamily="main" textSize="4.25vw">Talk to health professionals with anonimity.</Text></Row>
            </Row>
            <Row>
                <Content/>
            </Row>
        </Container>
        )
}

export default App
