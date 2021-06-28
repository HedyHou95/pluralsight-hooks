import React, { useState, useEffect } from 'react';

import ImageToggleOnScroll from './imageToggleOnScroll.js'

import logo from './logo.png'

import dispatcher from './dispatcher.png'

const SpeakerDetail = React.memo(({id, firstName, lastName, favorite, bio, onHeartFavoriteHandler})=>{
  
  const primaryImg = require(`../assets/speakers/bw/Speaker-${id}.jpg`).default
  const secondImg = require(`../assets/speakers/Speaker-${id}.jpg`).default
  
  console.log(`firstName: ${firstName}`)
	return (
		<div className="card col-4 cardmin">
			<ImageToggleOnScroll
        className="card-img-top"
        primaryImg={primaryImg}
        secondImg={secondImg}
        alt="{firstName} {lastName}"
      />
      <div className="card-body">
        <h4 className="card-title">
          <button
            data-sessionid={id}
            className={favorite ? "heartredbutton" : "heartdarkbutton"}
            onClick={e => {
              onHeartFavoriteHandler(e, !favorite);
            }}
          />
          <span>
            {firstName} {lastName}
          </span>
        </h4>

        <span>{bio}</span>
      </div>
		</div>
	)
})

export default SpeakerDetail