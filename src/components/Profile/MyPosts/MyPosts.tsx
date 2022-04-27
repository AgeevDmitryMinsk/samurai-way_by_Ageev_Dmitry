import React from 'react'
import s from './MyPosts.module.css'
import { Post } from './Post/Post'
export const MyPosts = () => {
    return (
        <>
            <div className={s.myPosts}>My posts</div>
            <div>New posts:</div>
            <div>
                <Post message={"It's my first post"} likes={10} />
                <Post message={'Hi, how are you?'} likes={11} />
                <div>Post3</div>
            </div>
        </>
    )
}
