import GoogleNavbar from '../Navbar/GoogleNavbar'
import 'primeicons/primeicons.css';
import React, { useState } from "react";
import { Paginator } from 'primereact/paginator';
import './Result.css'

function Result({ searchRes, page, time }) {
    
    let newPages = new Array(page)
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(10);

    const onPageChange = (event) => {
        setFirst(event.first);
        setRows(event.rows);
    };
    return (
        <div>

            <div className="saprateSearch">
            <div className="saprateserachContainer d-flex text-center">
                <div className="mask11s mx-4 mt-4">
                    <h1>Google</h1>
                </div>
                <form className="d-flex inputForm" role="search">
                <input  className=" searchInputs form-control " type="search" placeholder="Search" aria-label="Search"/><i className="pi pi-times mx-3"></i><span className="pi pi-search"></span>
                </form>

            </div>
                <GoogleNavbar/>
            
            </div><hr />
            <div className="time">

            About {page} results ({time})
            </div>



            <div className="result mt-5">
                {
                    searchRes.map((e) => {
                        return (
                            <div className="card my-4" key={e.cacheId}>
                                <div className="card-header">
                                    {e.displayLink}
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{e.title}</h5>
                                    <p className="card-text">{e.htmlTitle}</p>
                                    <a href={e.link} target="_blank" className="btn btn-primary">View In Deatil</a>
                                </div>
                            </div>

                        )
                    })
                }
            </div>



    

   

   
        <div className="card">
            <Paginator first={first} rows={rows} totalRecords={page} rowsPerPageOptions={[10, 20, 30]} onPageChange={onPageChange} />
        </div>
  

        
            
        </div>
    )
}

export default Result
