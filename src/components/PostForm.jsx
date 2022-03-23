import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''})

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        console.log(newPost)
        create(newPost)
        setPost({title: '', body: ''})

    }

    return (
        <div>
            <form>
                {/*Управляемый компонент*/}
                <MyInput
                    value = {post.title}
                    onChange = {e => setPost({...post, title: e.target.value})}
                    type='text'
                    placeholder='Название поста'
                />

                {/*Неуправляемый компонент*/}
                <MyInput
                    value = {post.body}
                    onChange = {e => setPost({...post, body: e.target.value})}
                    type='text'
                    placeholder='Описание поста'
                />
                <MyButton type = 'submit' onClick = {addNewPost}>Создать пост</MyButton>
            </form>
        </div>
    );
};

export default PostForm;