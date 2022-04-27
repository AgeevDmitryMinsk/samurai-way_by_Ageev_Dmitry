import React from 'react'
import postAvatar from './../../../../photos/milyj-rebenok-s-babochkoj-na-nosu.jpg'
import s from './Post.module.css'

type PropsPostType = {
    message: string
    likes: number
}

export const Post = (props: PropsPostType) => {
    return (
        <div className={s.item}>
            <img src={postAvatar} alt="postAvatar" />
            {props.message}
            <div>&hearts; {props.likes}</div>
        </div>
    )
}
