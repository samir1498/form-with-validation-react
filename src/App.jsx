import React from "react"
import "./css/app.css"
import "@fortawesome/fontawesome-free/css/all.min.css"

import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import Form from "./components/Form"

function App() {
  return (
    <>
      <NavBar />
      <main className="main">
        <div className="container">
          {/* Register Form */}
          <Form />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
