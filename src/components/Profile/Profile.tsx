import React from 'react'
//import s from './Profile.module.css'

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostDataType} from "../../index";
import {MyPosts} from "./MyPosts/MyPosts";

type ProfilePropsType = {
    PostData: PostDataType[]
}
export const Profile = (props: ProfilePropsType) => {
    console.log(props.PostData)
    return (
        <div>
            Main content

            <ProfileInfo />
            <MyPosts PostData={props.PostData} />
        </div>
    )
}
