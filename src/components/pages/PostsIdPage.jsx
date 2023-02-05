import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import { useFetching } from '../hooks/useFetching';
import Loader from '../UI/loader/Loader';

const PostsIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comment, setComment] = useState([]);
  const [fetchPostById, isLoading, error] = useFetching(async () => {
    const response = await PostService.getById(params.id);
    setPost(response.data);
  });
  const [fetchComments, isComLoading, comError] = useFetching(async () => {
    const response = await PostService.getCommentsById(params.id);
    setComment(response.data);
    console.log(response);
  });

  useEffect(() => {
    fetchPostById();
    fetchComments();
  }, []);

  return (
    <>
      <div>
        <h1>Вы открыли страницу поста с ID = {params.id}</h1>
        {isLoading ? (
          <Loader />
        ) : (
          <p>
            {post.id} {post.title}
          </p>
        )}
      </div>
      <div>
        <h1 style={{ marginTop: 26 }}>Комментарии</h1>
        {isComLoading ? (
          <Loader />
        ) : (
          <div>
            {comment.map((com) => (
              <div key={com.id} style={{ marginTop: 26 }}>
                <h3 style={{ marginBottom: 10 }}>{com.email}</h3>
                <div>{com.body}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default PostsIdPage;
