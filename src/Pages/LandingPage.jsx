import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../CSS/landingPage.css";



const LandingPage = () => {
 
  return (
    <> <center>
      <div className="navHead">
        <div >
          <img src="logo.png" alt="Base Logo" className="logoImg"/>
        </div>
        <div className="baseTitle">Base</div>
        <button className="newsletterBtn">Subscribe</button>
      </div> 
      <div className="navHeadMargin">
        <p className="pAnimation">Base is built for everyone</p>
      </div>
      <div>
        <h2 className="askaianything">Ask AI anything about Base</h2>
      </div> <br />

      <div class="col-9 mx-auto shadow">
        <div>
        <textarea name="textarea" placeholder="Ask AI anything about Base...." className="form-control my-2"style={{height:'90px',backgroundColor:'rgb(13,13,13)', border:'none', borderRadius:'15px',color:'white'}}>
        </textarea>
        <div className="sendBtnDiv">
        <button className="sendBtn"><i class="fa-solid fa-arrow-up"></i></button>
        </div>
        </div>
      </div>
      </center>
    </>
  )
}

export default LandingPage;