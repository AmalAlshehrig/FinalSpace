import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Card() {
  const [data, setData] = useState([]);
  const [isFlipped, setIsFlipped] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`https://finalspaceapi.com/api/v0/character/${id}`)
      .then((res) => {
        setData(res.data);
      })
  }, [id]);
  const handleCardFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`flex justify-center items-center min-h-screen bg-cover bg-center bg-[url('https://starwalk.space/gallery/images/what-is-space/1920x1080.jpg')]`} onClick={handleCardFlip}>
      <div className={`bg-white/75 p-4 rounded-lg shadow-md text-center transform ${isFlipped ? 'rotateY(180deg)' : ''}`}>
        {isFlipped ? (
          <>
            <h3 className="text-xl mb-2">Name: {data.name}</h3>
            <h3 className="text-xl mb-2">Gender: {data.gender}</h3>
            <h3 className="text-xl mb-2">Hair: {data.hair}</h3>
            <h3 className="text-xl mb-2">Origin: {data.origin}</h3>
            <h3 className="text-xl mb-2">Species: {data.species}</h3>
            <h3 className="text-xl mb-2">Status: {data.status}</h3>
          </>
        ) : (
          <img src={data.img_url} alt={data.name} className="w-full h-full object-cover mt-4" />
        )}
      </div>
    </div>
  );
}

export default Card;
