import React from 'react'
import {Div, Container, Row, Col,Text} from 'atomize'
import Navbar from './components/Navbar'
import Content from './components/Content'
import classes from './components/styles.module.css'
function App() {
    return (
        <div className = {classes.appContainer} >
            <Navbar/>
            <div className = {classes.headerArea}>
                <div className = {classes.mainHeader}>HekaTalk</div>
                <div className = {classes.subHeader}>Talk to health professionals with anonymity</div>
            </div>
            <Content/>
            
        </div>
        )
}

export default App
