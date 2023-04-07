import React from 'react'
import "./followercard.css"

const Followercard = ({data}) => {
  return (
    
      <div className="card">
        <div className="cardimage">
          <img
            src={data.profile}
            alt="img not available"
            className="cardimage"
          ></img>
        </div>
        <div className="classcontent">
          <p className="name">{data.username}</p>
          <p className="profession">{data.profession}</p>
          <p className="followers1">{data.followers}</p>
          <button className='followbutton'>Follow</button>
        </div>
      </div>
  
  );
}

export default Followercard
