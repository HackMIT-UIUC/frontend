import React from 'react'
import {Row,Div,Text,Icon} from 'atomize'
import classes from './styles.module.css'
function PostCard({title,caption,picture,id,views,likes}) {
    return (
            <div className = {classes.cardContainer}>
                <div className = {classes.imageContainer}><Div bg = "black" 
                w = "12vh" h = "9vh"/></div>
                <div className = {classes.textContainer}>
                    <Text fontSize = "1.75rem">Title</Text>
                    <Text fontSize = "1.2rem">Some Description....</Text>
                </div>
                <div className = {classes.centering}><Icon name="Message" color = "black" size="2.3vw"/></div>
                
                <div className = {classes.centering}><Icon name="Heart" color = {"accent"} size="2.3vw" align="center" justify= "center"/></div>
            </div>
    )
}

export default PostCard
