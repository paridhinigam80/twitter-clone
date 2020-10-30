import React from "react";
import {
    FaRegCheckCircle,
    FaComment,
    FaRegChartBar,
    FaHeart,
    FaLeaf,
  } from "react-icons/fa";
const Posts = () => {
    return (
      <div className="postss">
        <div className="postss__first">
          <div className="posts__first__img">
            <img src="/image/pari.jfif" alt="profile img" />
          </div>
          <div className="posts__first__name">
          <strong>Paridhi Nigam</strong> <FaRegCheckCircle className="verify" />
        </div>
        <div className="posts__first__username">
         pari@10 <span>6m</span>
        </div>
        <div className="postss__details">
        <div className="postss__details__msg">
        The decisions were taken by the IBC (the commercial subsidiary of the ICC) following 
        an extensive contingency planning exercise which has taken into account the health,
         cricket and commercial impact of COVID-19 around the world.
        <div className="postss__details__img">
          <img src="/image/post1.webp" alt="post" />
        </div>
        <div className="reactions">
          <span>
            <FaComment className="re" /> 45
          </span>
          <span>
            <FaRegChartBar className="re" /> 4
          </span>
          <span>
            <FaHeart className="re" /> 345
          </span>
          <span>
            <FaLeaf className="re" /> 234
          </span>
        </div>
      </div>
        </div>
        </div>
        </div>
         
    )
}
export default Posts;