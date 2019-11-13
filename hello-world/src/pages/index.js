import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Post from "../components/Post"

export default () => (
  <div>
    <Header></Header>
    <div className="container">
      <div className = "row justify-content-md-center">
        <div className="col-xs-6">
          <Post title="Bla Bla Bla" excerpt="This ais the real deal!"/>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
  
  );
