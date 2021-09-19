import React, {useState} from 'react'
import {Container,Text,Button,Icon} from 'atomize'
import PostCard from './PostCard'
import NewPostCard from './NewPostCards'
import Search from './Search'
import classes from './styles.module.css'
import CreateModal from './CreateModal'
import { PostCategories } from './PostCategories'
import { PostContents } from './PostCategories'
function Content() {
    const [modalOpen, toggleModal] = useState(false);
    return (
        <div className = {classes.contentContainer}>
            <div className = {classes.mainContainer}>
                <div className  = {classes.contentTopPart}>
                    <div className = {classes.sideHeader}>Join the Discussion</div>
                    <div></div>
                    <Search/>
                    <Button
                        maxW = "15vw"
                        h = "4.3vh"
                        suffix={
                        <Icon
                            name="Add"
                            size="1.5vw"
                            color="white"
                            m={{ l: "1rem" }}
                        />
                        }
                        shadow="3"
                        hoverShadow="4"
                        m={{ r: "1rem" }}
                        onClick = {()=>toggleModal(true)}
                    >
                        
                        Create Post
                    </Button>
                </div>
                <div className = {classes.cardWrapper}>
                    {PostCategories.map((item, index)=>{
                        return(
                         <PostCard title = {item.title} caption = {item.caption} id = {item.id} views = {item.views} likes = {item.likes} image = {item.img}/>)
                    })}
                </div>
                <div className = {classes.newPostsSection}>
                    <div className = {classes.newPostsHeader}>New Posts</div>
                    <div className = {classes.newPostsContainer}> {PostContents.map((item, index)=>{
                        return(
                         <NewPostCard title = {item.title} caption = {item.caption} id = {item.id} views = {item.views} likes = {item.likes} image = {item.img}/>)
                    })}
                    </div>
                </div>
            </div>
            <CreateModal isOpen = {modalOpen} onClose = {()=>toggleModal(false)}/>
        </div>
    )
}

export default Content
