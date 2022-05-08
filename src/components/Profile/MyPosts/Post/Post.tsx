import React from 'react'
import postAvatar from './../../../../photos/milyj-rebenok-s-babochkoj-na-nosu.jpg'
import s from './Post.module.css'
import {PostDataType} from "../../../../redux/store";


// type PropsPostType = {
//     message: string
//     likes: number
// }

export const Post = (props: PostDataType) => {
    return (
        <div className={s.item}>
            <img src={postAvatar} alt="postAvatar" />
            {props.message}
            <div>&hearts; {props.likesCount}</div>
        </div>
    )
}
