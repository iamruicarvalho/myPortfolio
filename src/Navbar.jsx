import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container">
            <a href="" className="navbar-brand logo">Logo</a>
            <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav" aria-controls='nav' aria-label='Expand Navigation'>
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="nav">
                <ul className="navbar-nav">
                    {/* need to manage active attribute */}
                    <li className="navbar-item" style={{marginLeft: '20px'}}>
                        <a href="#" className="nav-link active" aria-current="page">Home</a>
                    </li>
                    <li className="navbar-item" style={{marginLeft: '20px'}}>
                        <a href="#" className="nav-link" aria-current="page">About</a>
                    </li>
                    <li className="navbar-item" style={{marginLeft: '20px'}}>
                        <a href="#" className="nav-link" aria-current="page">Another1</a>
                    </li>
                    <li className="navbar-item" style={{marginLeft: '20px'}}>
                        <a href="#" className="nav-link" aria-current="page">Another2</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar