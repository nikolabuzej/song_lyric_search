import React from 'react'
import { Link } from 'react-router-dom'


export default function Track({track}) {
    return (
        <div className="col s6">
    <div className="row s12 m6">
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
    <span className="card-title truncate">{track.track_name}</span>
          <p className="truncate">{track.artist_name}</p>
          <p className="truncate">{track.album_name}</p>
         <Link to={`lyrics/track/${track.track_id}`} className='btn'>See more</Link>
        </div>
        </div>
        </div>
        </div>
    )
}
