import axios from 'axios'
import React, { useEffect, useState , } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Result from './Result'
import './SearchBox.css'
function SearchBox() {
    let [input, setInput] = useState("")
    let [searchRes, setSearchRes] = useState([])
    let [click, setclick] = useState(false)
    let [page, setpage] = useState([])
    let [time , setTime] = useState(0)

    let handleClick = async()=>{
        try {
         
            let url = `https://www.googleapis.com/customsearch/v1?key=AIzaSyC6NYDMumB9uJRgiDuU8IGDLODseS_Ic9w&cx=017576662512468239146:omuauf_lfve&q=${input}`
            let res = await axios.get(url)
            setSearchRes(res.data.items)
            setpage(res.data.searchInformation.totalResults)
            setTime(res.data.searchInformation.searchTime)
            console.log(res)
            setclick(true)
        } catch (error) {
            console.log(error)
        }
    }

   
    

    return (
        <div>
            <Navbar/>
           {click ? <Result searchRes={searchRes} page = {page} time = {time}/>: <div className="serachContainer text-center">
                <div className="mask1 ">
                    <h1>Google</h1>
                </div>
                <form className="d-flex" role="search">
                    <input className=" searchInput form-control me-2" value={input} onChange = {(e)=>setInput(e.target.value)} type="search" placeholder="Search" aria-label="Search"/>
                </form>
                <button type="button" onClick={()=>handleClick()} className="btn btn-primary my-4">Search</button>

            </div>}
            
        </div>
    )
}

export default SearchBox
