import React, { useEffect, useState } from 'react';
import client from '../server/appwrite';
import { Databases } from 'appwrite';
import { Link } from 'react-router-dom';

function Dashboard() {

  const [movies, setMovies] = useState("");
  const [loader, setLoader] = useState("");
  const databases = new Databases(client);

  useEffect(() => {
    setLoader(true)
    const promise = databases.listDocuments('63834f31f39d208f7012', '63834f3b9a59a88305eb');
    promise.then(response => {
      setMovies(response.documents)}
      ,error => {console.log(error)}
  );
  setLoader(false)
  }, []);

  return (
    <div>
      <div>Dashboard</div><p />
        <div><Link to='../movieadd'><button>영화추가하기</button></Link><p /></div>
       <div>
        {loader ? (
          <p>Loading...</p>
        ) : (
          <div> 
              {movies && movies.map(item => (
                  <div key={item.$id}>     
                    <div>영화제목 : {item.title}</div>
                    <div>상영년도 : {item.year}</div>
                    <div>감상평 :  {item.comment}</div>
                    <div>수정 / 삭제</div><p />
                  </div>
                )
                )}
          </div>
          )
        }
        
        </div>     
        
    
    </div>
  )
}

export default Dashboard