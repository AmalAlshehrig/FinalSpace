import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://finalspaceapi.com/api/v0/character")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
  }, []);
  return (
    <div className=" grid grid-cols-4 gap-4 max-sm:grid-cols-2 p-2">
      {data.map((character) => (
        <div className="card" key={character.id}>
          <div className="card--image">
            <Link to={`/${character.id}`}>
            <img src={character.img_url} alt={character.name} />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Home;
