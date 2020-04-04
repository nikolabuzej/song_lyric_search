import React, { useState }  from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import Spinner from './Spinner'
export default function Lyrics(props) {
    const [lyrics,setLyrics]=useState('')
    useEffect(() => {
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${props.match.params.id}&apikey=c0b4716f5490b1976aa219b3bbdda86a`)
        .then(res=>{console.log(res.data)
            setLyrics(res.data.message.body.lyrics.lyrics_body)
        })
        .catch(err=>console.log(err))
    }, [props.match.params.id])
    if(lyrics===''){
        return (
            <Spinner/>
        )
        }
        else{
    return (
        
        <div>
            <p>{lyrics}</p>
        </div>
    )}
}
