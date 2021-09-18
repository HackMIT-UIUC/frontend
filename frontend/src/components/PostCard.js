import React from 'react'
import {Row} from 'atomize'
import classes from 'styles.modules.css'
function PostCard({title,caption,picture,id,views,likes}) {
    return (
        <Row>
            <div className = {classes.imageContainer}></div>
        </Row>
    )
}

export default PostCard
