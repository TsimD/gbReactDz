import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {postsError, postsLoading, postsSelector} from "../redux/reducers/posts/postsSelector";
import {getPosts} from "../redux/reducers/posts/postsReducer";
import LoadingGif from "../components/LoadingGif";
import "../style/PostsPage.css"
import {GET_POSTS_DELETE} from "../redux/reducers/actionTypes";



const PostsPage = () => {
  const posts = useSelector(postsSelector)
  const loader = useSelector(postsLoading)
  const error = useSelector(postsError)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts())
  }, [])

  if(loader){
    return (
        <div><LoadingGif/></div>

    )
  }

  if(error){
    return (
        <div>ERROR ERROR ERROR <button onClick={()=>dispatch(getPosts())}>Обновить</button> </div>
    )
  }

  return (
      <div className="postsContainer">
        {posts.map((post) => {
          return (
              <div key={post.id} className="postStyle">
                {post.title}
                <button className="postDeleteButton" onClick={()=>dispatch({type:GET_POSTS_DELETE, payload: post.id})}>Удалить</button>
              </div>
          )
        })}
      </div>
  );
};

export default PostsPage;
