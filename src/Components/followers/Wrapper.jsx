import React from 'react'
import Followercard from './Followercard'
import {events} from "../../Constants/dummydata"
import "./followercard.css"

const Wrapper = () => {
  return (
    <div>
      <div className="div4">
        {events.map((item, id) => (
          <Followercard data={item} key={id} />
        ))}
      </div>
    </div>
  );
}

export default Wrapper
