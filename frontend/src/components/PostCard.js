import React from 'react'
import {Row,Div,Text,Icon} from 'atomize'
import Mental from '../static/Mental.jpg'
import classes from './styles.module.css'
function PostCard({title,caption,picture,id,views,likes, image}) {
    return (
            <div className = {classes.cardContainer}>
                <div className = {classes.imageContainer}><img  className = {classes.imagePiece} src = {image}/> </div>
                <div className = {classes.textContainer}>
                    <div className = {classes.cardHeader} >{title}</div>
                    <div className = {classes.cardDesc}>{caption}</div>
                </div>
                <div className = {classes.centering}><Icon name="Message" color = "black" size="1.9vw"/></div>
                
                <div className = {classes.centering}><Icon name="Eye" color = "#687698" size="1.9vw" align="center" justify= "center"/></div>
            </div>
    )
}

export default PostCard
