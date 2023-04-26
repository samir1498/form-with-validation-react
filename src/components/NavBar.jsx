import React from "react"

import logo from "../assets/react.svg"

export default function NavBar() {
  return (
    <>
      <div className="navbar">
        <img src={logo} alt="logo" className="navbar__log" />
      </div>
    </>
  )
}
