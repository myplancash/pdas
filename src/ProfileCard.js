import React from 'react'


const ProfileCard = ({title, handle, image, description}) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={image} alt="title of the card info" />
        </figure>
      </div>
      
      <div className="card-content">
        <div className="media-content">
          <h1 className="title is-4">{title}</h1>
          <p className="subtitle is-6">{handle}</p>
        </div>
        <div className="content">
          {description}
          <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard