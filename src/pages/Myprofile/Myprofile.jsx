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
              className="input1"
              placeholder="tell something anout yourself"
            ></input>
          </div>
        </div>
        <div className="ciphermap">
          <p className="aboutme">CIPHER MAP</p>
          <img src={map} className="map"></img>
        </div>
        <div className="ontheweb">
          <div className="title">
            <p className="aboutme">ON THE WEB</p>
            <button className="editbutton">Edit</button>
          </div>
          <div className="socials">
            <div className="column">
              <p className="socialsheading">Linkedin</p>
              <input
                type="link"
                className="input"
                placeholder="Linkedin"
              ></input>
              <p className="socialsheading">Github</p>
              <input type="link" className="input" placeholder="Github"></input>
              <p className="socialsheading">Facebook</p>
              <input
                type="link"
                className="input"
                placeholder="Facebook"
              ></input>
            </div>
            <div className="column">
              <p className="socialsheading">Twitter</p>
              <input
                type="link"
                className="input"
                placeholder="Twitter"
              ></input>
              <p className="socialsheading">Instagram</p>
              <input
                type="link"
                className="input"
                placeholder="Instagram"
              ></input>
              <p className="socialsheading">website</p>
              <input
                type="link"
                className="input"
                placeholder="Website"
              ></input>
            </div>
          </div>
        </div>

        <div className="professionalinfo">
          <div className="title">
            <p className="aboutme">PROFESSIONAL INFORMATION</p>
            <button className="editbutton">Edit</button>
          </div>
          <div className="column">
            <p className="socialsheading">Highest Education</p>
            <input
              type="link"
              className="input"
              placeholder="graduation"
            ></input>
            <p className="socialsheading">What do you currently do? </p>
            <input type="link" className="input" placeholder="College"></input>
          </div>
        </div>
        <div className="security">
          <div className="title">
            <p className="aboutme">PASSWORD AND SECURITY</p>
            <button className="editbutton">Edit</button>
          </div>
          <div className="column">
            <p className="socialsheading">Password</p>
            <input
              type="password"
              className="input2"
              placeholder="enter your password"
            ></input>
          </div>
        </div>
        <div className="ontheweb">
          <div className="title">
            <p className="aboutme">INTERESTS</p>
            <button className="editbutton">Edit</button>
          </div>
          <input
            type="password"
            className="input5"
            placeholder="enter your interests"
          ></input>
        </div>
      </div>
    </div>
  );
}

export default Myprofile
