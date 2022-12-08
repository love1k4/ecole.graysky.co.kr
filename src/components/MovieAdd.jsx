import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Databases, ID } from 'appwrite';
import client from '../server/appwrite';

function MovieAdd() {

  const databases = new Databases(client);
  const documentID = ID.unique();
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [comment, setComment] = useState("");
  const navigate = useNavigate();

  const addNewMovie = async (e) => {
    e.preventDefault()

    const promise = databases.createDocument('63834f31f39d208f7012', '63834f3b9a59a88305eb', documentID, {title, year, comment});

    promise.then(function (response) {
        console.log(response); // Success
        navigate("/dashboard")
    }, function (error) {
        console.log(error); // Failure
    });
  };
  return (
    <div>
      <form>
        <input type='text' name='title' label='title' id='title' placeholder='영화제목을 입력하세요' onChange={(e) => setTitle(e.target.value)} /> <p />
        <input type='text' name='year' label='year' id='year' placeholder='상영년도를 입력하세요' onChange={(e) => setYear(e.target.value)}/><p />
        <input type='text' name='comment' label='comment' id='comment' placeholder='감상평을 입력하세요' onChange={(e) => setComment(e.target.value)} /> <p />
        <button onClick={addNewMovie}> 영화 추가</button>
      </form>

    </div>
  )
}

export default MovieAdd