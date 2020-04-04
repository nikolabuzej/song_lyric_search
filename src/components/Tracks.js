import React, { useContext } from 'react'
import { LyricContext } from './context/Context'
import Track from './Track'
import Spinner from './Spinner'

export default function Tracks() {

    const {tracks}=useContext(LyricContext)
   

    if(tracks===undefined || tracks.length===0 ){
        return (
            <div className='center-align'>
           <Spinner/>
           </div>
        )
    }else{
    return (
        <div className="row">
          
            {tracks.map(track=><Track  key={track.track.track_id}track={track.track}/>)}
            
        </div>
    )}
}
