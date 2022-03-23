import React, {useMemo, useRef, useState} from 'react';
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css'
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import {usePosts} from "./hooks/usePosts";


function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', body: 'Eescription'},
        {id: 2, title: 'Awewfafwfvascript 2', body: 'Fescription'},
        {id: 3, title: 'Vfffavascript 3', body: 'Tescription'},

    ])

    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const  sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)




    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }



    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)

    }

    return (
        <div className='App'>
            <MyButton style = {{marginTop: 30}} onClick = {() => setModal(true)}>
                Создать пользователя
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create = {createPost}/>
            </MyModal>
            <hr style={{margin: '15px 0'}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>

            <PostList remove = {removePost} posts={sortedAndSearchedPosts} title='Посты про JS'/>
        </div>
    );
    }

    export default App;
