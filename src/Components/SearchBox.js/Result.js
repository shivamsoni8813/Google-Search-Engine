import React from 'react'
import GoogleNavbar from '../Navbar/GoogleNavbar'
import Navbar from '../Navbar/Navbar'
import './Result.css'
function Result({ searchRes }) {
   console.log(searchRes.map((e)=>{
    console.log(e)
   }))
    return (
        <div>

            <div className="saprateSearch">
            <div className="saprateserachContainer d-flex text-center">
                <div className="mask11s mx-4 mt-4">
                    <h1>Google</h1>
                </div>
                <form className="d-flex" role="search">
                    <input className=" searchInputs form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                </form>
                <button type="button" className="searchBtn btn btn-primary">Search</button>

            </div>
                <GoogleNavbar/>
            
            </div><hr />




            <div className="result mt-5">
                {
                    searchRes.map((e) => {
                        return (
                            <div className="card" key={e.cacheId}>
                                <div className="card-header">
                                    {e.displayLink}
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{e.title}</h5>
                                    <p className="card-text">{e.htmlTitle}</p>
                                    <a href={e.link} target="_blank" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>

                        )
                    })
                }
            </div>
        </div>
    )
}

export default Result
