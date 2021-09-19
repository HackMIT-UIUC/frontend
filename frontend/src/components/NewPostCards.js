import React from 'react'
import {Row,Div,Text,Icon} from 'atomize'
import classes from './newpostcard.module.css'
function NewPostCard({title,caption,picture,id,views,likes}) {
    return (
            <div className = {classes.cardContainer}>
                <div className = {classes.newPostCardTextHeader}>Title</div>
                <div className = {classes.newPostCardText}>Category</div>
                <div className = {classes.newPostCardText}>Description...</div>
                <div className = {classes.solidSeperator}/>
                <div className = {classes.iconWrapper}>
                    <div className = {classes.centering}><Icon name="Message" color = "black" size="1.5vw"/></div>
                    <div></div>
                    <div className = {classes.centering}><Icon name="Heart" color = {"accent"} size="1.5vw" align="center" justify= "center"/></div>
                </div>
            </div>
    )
}

export default NewPostCard
