import React, { useEffect,createContext, useReducer } from 'react'
import Axios from 'axios'
import { reducer } from './Reducer'

export const LyricContext=createContext()

export  function Provider(props) {
    const initTracks={
        tracks:[],
        spinner:true
    }
    
    const [tracks,dispatch]=useReducer(reducer,initTracks)

    useEffect(()=>{
        
        Axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=c0b4716f5490b1976aa219b3bbdda86a`)
        .then(res=>{
                dispatch({type:'GET_TOP_10',payload:res.data.message.body.track_list})
            console.log(res.data)})
        .catch(err=>console.log(err.message))
    },[])
   function submitToState(searchParam){
     
       console.log(searchParam)
    Axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${searchParam}&page_size=10&page=1&s_track_rating=desc&apikey=c0b4716f5490b1976aa219b3bbdda86a`)
    .then(res=>{
        console.log(res.data)
        dispatch({type:'SEARCHED_SONGS',payload:res.data.message.body.track_list})
    })
    .catch(err=>{
        console.log(err)
    })
   }
   
    return (
        <LyricContext.Provider value={{tracks:tracks.tracks, submitToState}}>
            {props.children}
        </LyricContext.Provider>
    )
}
