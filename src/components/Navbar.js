import React, { useState } from 'react'

function Navbar(props) {

  const [query, setQuery] = useState("")
  const [homePage, setHomePage] = useState(1)
  const [catg, setCatg] = useState('')
  const [cntry, setCntry] = useState('in')
  const [qry, setQry] = useState('')

  function handleOnChange(event) {
    const newVal = event.target.value
    setQuery(newVal)
  }

  function handleOnClick() {
    if (qry != query) {
      props.reset();
      props.setPg1()
      props.setQue(`q=${query}&`)
      setQry(query)
      setCatg('')
      setCntry('')
      setQuery("")
      setHomePage(0)
    }
  }
  function handleOnKeyUp(event) {
    if (event.keyCode === 13) {
      handleOnClick();
    }
  }

  function func(e) {
    let s = e.target.lastChild.nodeValue.toLowerCase()
    if (catg !== s) {
      props.reset()
      props.setPg1()

      let cat = `category=${s}&`
      setCatg(s)
      setQry('')
      setCntry('')
      props.setCat(cat)
      setHomePage(0)
    }
  }

  function funcCountryUS() {
    if (cntry != 'us') {
      props.reset()
      props.setPg1()
      props.setCou('country=us&');
      setHomePage(0)
      setCntry('us')

    }
  }

  function funcCountryIN() {
    if (homePage == 0) {
      props.reset()
      props.setPg1()
      props.setCou('country=in&');
      props.setCat('')
      props.setQue('')
      setHomePage(1)
      setCatg('')
      setQry('')
      setCntry('in')

    }
  }

  function reload(){
    window.location.reload(true)
  }



  return (
    <nav className={`navbar navbar-expand-lg bg-dark sticky-top ${props.cls}`} data-bs-theme="dark">
      <div className="container-fluid pl-4">
        <span className="navbar-brand logo"  onClick={reload}>
          THE NEWS ROOM
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ backgroundColor: "white" }}
        >
          {/* <span> Categories </span> */}
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse mx-3" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item ">
              <a className="nav-link home" onClick={funcCountryIN}>
                Home
              </a>
            </li>

            <li className="nav-item dropdown ">
              <a
                className="nav-link dropdown-toggle hvr"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </a>
              <ul className="dropdown-menu">
                <li>
                  <p className="dropdown-item hvr" onClick={func}>
                    Health
                  </p>
                </li>
                <li>
                  <p className="dropdown-item hvr" onClick={func}>
                    Sports
                  </p>
                </li>
                <li>
                  <p className="dropdown-item hvr" onClick={func}>
                    Science
                  </p>
                </li>
                <li>
                  <p className="dropdown-item hvr" onClick={func}>
                    Entertainment
                  </p>
                </li>
                <li>
                  <p className="dropdown-item hvr" onClick={func}>
                    Business
                  </p>
                </li>
                <li>
                  <p className="dropdown-item hvr" onClick={funcCountryUS}>
                    Foreign
                  </p>
                </li>
              </ul>
            </li>
          </ul>
          <div className="d-flex" role="search">


            <input
              className="form-control me-2"
              placeholder="Search news"
              aria-label="Search"
              onChange={handleOnChange} onKeyUp={handleOnKeyUp} type="text" value={query}
            />
            <button className="btn btn-outline-success" onClick={handleOnClick}>
              Search
            </button>
          </div>
        </div>
      </div>
    </nav>

  )
}

export default Navbar
