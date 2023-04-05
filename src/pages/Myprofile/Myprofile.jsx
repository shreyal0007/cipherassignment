import React from 'react'
import './Myprofile.css'
import logo from "../../images/cipherlogo.jpeg"
import map from "../../images/map.jpg"

const Myprofile = () => {
  return (
    <div>
      <div className="header">
        <div className="col1">
          {" "}
          <img src={logo} className="logoimage"></img>
        </div>
        <div className="col2">
          <p className="hello">Hello,</p>
          <p className="cipherschools">Cipher Schools</p>
          <p className="email">******@cipherschools.com</p>
        </div>
        <div className="col3">
          <p>**.2k Followers</p>
        </div>
      </div>
      <div className="body" style={{ backgroundColor: "#f3f4fa" }}>
        <div className="aboutme">
          <div className="title">
            <p className="aboutme">About Me</p>
            <button className="editbutton">Edit</button>
          </div>
          <div>
            <input
              type="text"
              className="input"
              placeholder="tell something anout yourself"
            ></input>
          </div>
        </div>
        <div className="ciphermap">
          <p className="aboutme">Cipher Map</p>
          <img src={map} className="map"></img>
        </div>
        <div className='ontheweb'>
          
        </div>
      </div>
    </div>
  );
}

export default Myprofile
