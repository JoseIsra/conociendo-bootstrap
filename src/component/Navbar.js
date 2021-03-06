import React from 'react'

export const  Navbar=() =>{
    return (
        <nav className=" py-3 navbar navbar-expand-lg fixed-top auto-hiding-navbar">
        <div className="container">
            <a className="navbar-brand" rel="noreferrer"  target="_blank" href="https://github.com/JoseIsra?tab=repositories">
                Web <span className="badge bg-primary">Development</span>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#0070f3" 
                strokeWidth="2.5" strokeLinecap="round"
                strokeLinejoin="round" className="feather feather-align-justify"><line x1="21" y1="10" x2="3" y2="10"/><line x1="21" y1="6" x2="3" y2="6"/><line x1="21" y1="14" x2="3" y2="14"/><line x1="21" y1="18" x2="3" y2="18"/></svg>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto nav-pills">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Web</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Development</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Con</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Bootstrap</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}


