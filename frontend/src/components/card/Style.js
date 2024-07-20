import React, { useState } from 'react';

//icons
import { FaRegHeart } from 'react-icons/fa'; // Unlike-icon
import { IoShareSocialOutline } from 'react-icons/io5'; // share-icon
import { MdOutlineWallpaper } from "react-icons/md"; // Theme-icon
import { FcLike } from "react-icons/fc"; // like-icon

//image
import defaultImage from '../../assets/images/default-image.jpg';
import axios from 'axios';

const Card = (props) => {
  const Box = { display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0px 0px 1.8px 0px rgba(0, 0, 0, 0.4)', padding: '1rem', borderRadius: '.3rem', gap: '1rem', minWidth: '22rem', width: '40%', height: '35rem' };
  let [value, setValue] = useState(defaultImage);

  const handleFile = (event) => {
    console.log(event);
    setValue(URL.createObjectURL(event.target.files[0]))
  }

  const [like, setLike] = useState(true);

  const handleLike = async (quote) => {
    let response = axios.post('https://quote-3.onrender.com/like', quote, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    console.log(response);
    setLike(!like)
  };

  const handleDisLike = async (quote) => {
    let response = axios.post('https://quote-3.onrender.com/unlike', quote, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    console.log(response);
    setLike(!like)
  };

  const handleShare = () => {
    window.location.href = 'whatsapp://send?text=' + 'hello world'
  }

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginTop: '5rem', marginBottom: '5rem' }}>
        <div style={Box}>

          <div style={{
            position: "relative",
            textAlign: "center",
            color: "white",
            height: '100%',
            width: '100%',
            overflow: 'hidden'
          }}>
            <img src={value} alt='' style={{ width: '100%', height: '100%', objectFit: "cover" }} />
            <div style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              minWidth: '18rem',
              width: '30%',
              transform: "translate(-50%, -50%)",
              fontSize: '21px'
            }}>{props.name}</div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', fontSize: '1.3rem' }}>

            {
              (like === true) ? (
                <FaRegHeart title='Like' style={{ cursor: "pointer", fontSize: '1.3rem' }} onClick={() => handleLike({ quote: props.name })} />

              ) :
                (
                  <FcLike style={{ fontSize: '1.3rem' }} onClick={() => handleDisLike({ quote: props.name })} />
                )
            }
            <IoShareSocialOutline title='Share' style={{ cursor: "pointer" }} onClick={handleShare} />
            <label>
              <MdOutlineWallpaper title='Theme' style={{ cursor: "pointer" }} />
              <input style={{ display: 'none' }} type="file" onChange={handleFile} />
            </label>

          </div>
        </div>
      </div >
    </>
  )
}
export { Card }