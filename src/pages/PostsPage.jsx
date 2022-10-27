import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {postsSelector} from "../redux/reducers/postsSelector";
import {getPosts} from "../redux/reducers/postsReducer";

const PostsPage = () => {
  const posts = useSelector(postsSelector)
  const loader = useSelector(state=>state.posts.loading)
  const error = useSelector(state=>state.posts.error)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts())
  }, [])

  if(loader){
    return (
        <div>Loading...</div>
    )
  }

  if(error){
    return (
        <div>ERROR ERROR ERROR</div>
    )
  }

  return (
      <div>
        {posts.map((post) => {
          return (
              <div key={post.id}>
                {post.title}
              </div>
          )
        })}
      </div>
  );
};

export default PostsPage;
