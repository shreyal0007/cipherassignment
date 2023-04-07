import React from 'react'
import Wrapper from '../../Components/followers/Wrapper';
import logo from "../../images/cipherlogo2.png";

import "./Following.css"

const Following = () => {
  return (
    <div>
      <div className="header1">
        <img src={logo} className="headerimage"></img>
        <p className="headertext1">CipherSchools</p>
      </div>
      <div className="body1" style={{ backgroundColor: "#14191e" }}>
        <p className="bodytext">Users following you</p>
        <Wrapper />
      </div>
    </div>
  );
}

export default Following
