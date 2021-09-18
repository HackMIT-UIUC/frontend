import React from 'react'
import {Container,Text} from 'atomize'
import PostCard from './PostCard'
import Search from './Search'
import classes from './styles.module.css'
function Content() {
    return (
        <Container rounded = "0.25rem" m = "1rem 0 0 0" d="flex" flexDir = "column" align = "center" justify="center" bg = "white" w = "80vw" h = "65vh">
            <div className = {classes.mainContainer}>
                <div className  = {classes.contentTopPart}>
                    <Text m = "0.25rem">Join the Discussion</Text>
                    <div></div>
                    <Search/>
                    <Text>New Post</Text>
                </div>
            </div>
        </Container>
    )
}

export default Content
