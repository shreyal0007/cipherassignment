import { useEffect, useState } from "react"
import React from "react"
import {Modal} from "@mantine/core"
import gitwall2 from "../../images/gitwall2.png"
import cross from "../../images/cross.png"
import './Myprofile.css'
import logo from "../../images/cipherlogo.jpeg"
import axios from "axios";

const Myprofile = () => {
  const[modal,setModal]=useState(false);
  const[modal1,setModal1]=useState(false);
  const[modal2,setModal2]=useState(false);
  const[linkedin, setlinkedin] = useState("false");
  const[git,setGit]=useState("false");
  const[facebook,setFacebook]=useState("false");
  const[twitter,setTwitter]=useState("false");
  const[instagram,setInstagram]=useState("false");
  const[website,setWebsite]=useState("false");
  const [userdetails, setUserdetails] = useState({})
  useEffect(()=>{
    axios
      .get("http://localhost:5000/user/getuserdetails", {
        headers: {
          Authorization:
            "bearer eyJhbGciOiJIUzI1NiJ9.NjQyZTY3ZTI4ZTMwNDg2NWY4OTVmN2Fi.aHBd4wTEeiT3L7jQAH_VZcUi383onCVvfs_j69Kv9Tg",
        },
      })
      .then(function (response) {
        // handle success
        setUserdetails(response.data)
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  },[])
  const updateUser = ()=>{
 axios
   .get("http://localhost:5000/user/getuserdetails", {
     headers: {
       Authorization:
         "bearer eyJhbGciOiJIUzI1NiJ9.NjQyZTY3ZTI4ZTMwNDg2NWY4OTVmN2Fi.aHBd4wTEeiT3L7jQAH_VZcUi383onCVvfs_j69Kv9Tg",
     },
     data: {
      linkedin: linkedin,
      github: git,
      facebook:facebook,
      twitter:twitter,
      website:website,
      instagram:instagram,
      ///other fields
     }
   })
   .then(function (response) {
     // handle success
     setUserdetails(response.data);
     console.log(response.data);
   })
   .catch(function (error) {
     // handle error
     console.log(error);
   });
  }

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
          <p className="hello" onClick={() => setModal(true)}>
            Hello,
          </p>
          <p className="cipherschools" onClick={() => setModal(true)}>
            {userdetails?.username}
          </p>
          <p className="email" onClick={() => setModal(true)}>
            {userdetails?.email}
          </p>
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
          <img src={gitwall2} className="map"></img>
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
                onChange={(e) => {
                  setlinkedin(e.target.value);
                }}
              ></input>
              <p className="socialsheading">Github</p>
              <input
                type="link"
                className="input"
                placeholder="Github"
                onChange={(e) => {
                  setGit(e.target.value);
                }}
              ></input>
              <p className="socialsheading">Facebook</p>
              <input
                type="link"
                className="input"
                placeholder="Facebook"
                onChange={(e) => {
                  setFacebook(e.target.value);
                }}
              ></input>
            </div>
            <div className="column">
              <p className="socialsheading">Twitter</p>
              <input
                type="link"
                className="input"
                placeholder="Twitter"
                onChange={(e) => {
                  setTwitter(e.target.value);
                }}
              ></input>
              <p className="socialsheading">Instagram</p>
              <input
                type="link"
                className="input"
                placeholder="Instagram"
                onChange={(e) => {
                  setInstagram(e.target.value);
                }}
              ></input>
              <p className="socialsheading">website</p>
              <input
                type="link"
                className="input"
                placeholder="Website"
                onChange={(e) => {
                  setWebsite(e.target.value);
                }}
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
            <button className="editbutton" onClick={() => setModal2(true)}>
              Edit
            </button>
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
