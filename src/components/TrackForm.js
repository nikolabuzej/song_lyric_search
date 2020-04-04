import React, { useState,useContext } from 'react'
import { LyricContext } from './context/Context'

export default function TrackForm() {
 
  const [searchParam,setSearch]=useState('')
  const {submitToState}=useContext(LyricContext)
  const submitSearch=(e)=>{
    e.preventDefault()
 
    submitToState(searchParam)
   setSearch('')
  }
    return (
        <form className="col s12" onSubmit={(e)=>submitSearch(e)}>
        <div className="row">
        <div className="input-field col s10">
          <input id="search" type="search" value={searchParam} onChange={(e)=>setSearch(e.target.value)} ></input>
          <label>Search</label>
          </div>
          <div className="input-field col s2">
          <button className="btn waves-effect waves-light" type="search" >Search
    <i className="material-icons right">search</i>
  </button>
          </div>
        
      </div>
        </form>
    )
}
