import { useState } from "react"
import React from "react"
import {Modal} from "@mantine/core"
import gitwall from "../../images/gitwall.png"
import cross from "../../images/cross.png"

import './Myprofile.css'
import logo from "../../images/cipherlogo.jpeg"
import map from "../../images/map.jpg"

const Myprofile = () => {
  const[modal,setModal]=useState(false);
  const[modal1,setModal1]=useState(false);
  const [modal2,setModal2]=useState(false);

  return (
    <div>
      <Modal
        opened={modal}
        onClose={() => setModal(false)}
        centered
        overflow="inside"
        overlayBlur="10"
        withCloseButton={false}
      >
        <img
          src={cross}
          alt="close"
          className="modalclosebutton"
          onClick={() => setModal(false)}
        />
        <div className="modaltitle"> Profile Update</div>
        <div className="modalbody">
          <div className="modalcol1">
            <img
              src={logo}
              alt="img not available"
              className="modalimage"
            ></img>
          </div>
          <div className="modalcol2">
            <p className="heading1">First Name</p>
            <input
              type="text"
              className="input8"
              placeholder="First Name"
            ></input>
            <p className="heading1">Last Name</p>
            <input
              type="text"
              className="input8"
              placeholder="Last Name"
            ></input>
            <p className="heading1">Email</p>
            <input type="text" className="input8" placeholder="Email"></input>
            <p className="heading1">Phone Number</p>
            <input
              type="text"
              className="input8"
              placeholder="Phone Number"
            ></input>
          </div>
        </div>
        <div className="modalfooter">
          <button
            className="modalbuttonscancel"
            onClick={() => setModal(false)}
          >
            Cancel
          </button>
          <button className="modalbuttonsave">Save</button>
        </div>
      </Modal>
      <Modal
        opened={modal1}
        onClose={() => setModal1(false)}
        centered
        overflow="inside"
        overlayBlur="10"
        withCloseButton={false}
      >
        <img
          src={cross}
          alt="close"
          className="modalclosebutton"
          onClick={() => setModal1(false)}
        />
        <div className="modalbody">
          <div className="modalcol2">
            <p className="heading1">Current Password</p>
            <input
              type="password"
              className="input8"
              placeholder="Current Password"
            ></input>
            <p className="heading1">New Password</p>
            <input
              type="password"
              className="input8"
              placeholder="New Password"
            ></input>
            <p className="heading1">Confirm Password</p>
            <input
              type="password"
              className="input8"
              placeholder="Confirm Password"
            ></input>
          </div>
        </div>
        <div className="modalfooter">
          <button
            className="modalbuttonscancel"
            onClick={() => setModal1(false)}
          >
            Cancel
          </button>
          <button className="modalbuttonsave">Save</button>
        </div>
      </Modal>
      <Modal
        opened={modal2}
        onClose={() => setModal2(false)}
        centered
        overflow="inside"
        overlayBlur="10"
        withCloseButton={false}
      >
        <img
          src={cross}
          alt="close"
          className="modalclosebutton"
          onClick={() => setModal2(false)}
        />

        <div className="modalbody">
          <div className="modal3col1">
            <button className="orangebutton">App Development</button>
            {/* <button className="bluebutton">Game Development</button> */}
            <button className="bluebutton">Programming</button>
            <button className="bluebutton">Data Science</button>
          </div>
          <div className="modal3col2">
            <button className="orangebutton">Web Development</button>
            <button className="orangebutton">Data Structures</button>
            {/* <button className="orangebutton">Machine Learning</button> */}
            <button className="bluebutton">Others</button>
          </div>
        </div>
        <div className="modalfooter">
          <button
            className="modalbuttonscancel"
            onClick={() => setModal(false)}
          >
            Cancel
          </button>
          <button className="modalbuttonsave">Save</button>
        </div>
      </Modal>

      <div className="header">
        <div className="col1">
          {" "}
          <img
            src={logo}
            className="logoimage"
            onClick={() => setModal(true)}
          ></img>
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
          <img src={gitwall} className="map"></img>
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
            <button className="editbutton" onClick={() => setModal1(true)}>
              Edit
            </button>
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
            <button className="editbutton" onClick={() => setModal2(true)}>Edit</button>
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
