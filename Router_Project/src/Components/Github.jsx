import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Github = () => {
    const {username} = useParams();
    const [data, setData] = useState('');
    useEffect(() => {
         fetch(`https://api.github.com/users/${username}`)
         .then((response) => response.json())
         .then((response) => setData(response))
         .catch((error) => console.log(error))
    },[])
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github : {data.name}

      <div>
        <p>{data.followers}</p>
        <p>{data.id}</p>
        <img src={`${data.avatar_url}`} alt="" />
      </div>
    </div>
  );
};

export default Github;
