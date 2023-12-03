import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "./postsSlice";
import React from 'react'

const AddPost = () => {
    const disPatch = useDispatch();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const onSavePost = () => {
        if (title && content) {
            disPatch(addPost(title, content))
        }

    }
    return (
        <section className="main">
            <h1>Add post</h1>
            <input type="text"
                value={title}
                onChange={(e) => { setTitle(e.target.value) }}
                placeholder="Add your Title"
            />
            <input type="text"
                value={content}
                onChange={(e) => { setContent(e.target.value) }}
                placeholder="Add your Content"
            />
            <button
                type="button"
                onClick={() => onSavePost()}
            >Add Post</button>
        </section>
    )
}

export default AddPost
