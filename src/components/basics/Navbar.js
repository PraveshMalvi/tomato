import React from 'react'

function Navbar({filterItem, menuList}) {
    return (
        <>
            
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand font-weight-bold" style={{color:'red'}} href="#">TOMATO</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="mx-auto navbar-nav">
                        {menuList.map((currEle) => {
                            return(
                                <li className="nav-item">
                                    <a className="nav-link text-capitalize text-white p-3 active" aria-current="page" href="#"onClick={() => filterItem(currEle)}>{currEle}</a>
                                </li>
                            )
                        })}
                    </ul>
                    </div>
                </div>
            </nav>
            
        </>
    )
}

export default Navbar
