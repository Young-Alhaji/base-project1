import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';
import "../CSS/landingPage.css";



const LandingPage = () => {
  const [question, setquestion] = useState('')
  const [errorMessage, seterrorMessage] = useState('')
  const [loading, setloading] = useState(false)
  const [reply, setreply] = useState('')
  const [allReply, setallReply] = useState([])
  let navigate = useNavigate()

  const subscribe =()=>{
    navigate('/subscribe')
  }


  const ask = async () => {
     if (!question) {
      seterrorMessage('Input required');
       return;
     }
     setloading(true);
     seterrorMessage('');

    const url = 'https://base-network-agent.onrender.com/user/invoke';
    const payload = { message: question };
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      setloading(false);
      setquestion('')
  
      if (!response.ok) {
        // Handle non-2xx HTTP responses
        const errorData = await response.json();
        console.error('Error:', errorData);
        throw new Error(`Request failed with status ${response.status}`);
      }    
        const data = await response.json(); // Parse the JSON response
        console.log(data.content)
          setreply(data.content)
          console.log(reply)  
      console.log('Response:', data);
    } catch (error) {
      console.error('Fetch error:', error.message);
    }
  };

  
  return (
    <> <center>
      <div className="navHead">
        <div >
          <img src="logo.png" alt="Base Logo" className="logoImg"/>
        </div>
        <div className="baseTitle">Base</div>
        <button className="newsletterBtn" onClick={subscribe}>Subscribe</button>
      </div> 
      <div className="navHeadMargin">
        <p className="pAnimation">Base is built for everyone</p>
        <div className="reply">
        {reply}
      </div>
      </div>
      
      <div>
        <h2 className="askaianything">Ask AI anything about Base</h2>
      </div> <br />
      

      <div class="col-9 mx-auto shadow">
        <div>
        <textarea name="question" id="question" value={question} placeholder="Ask AI anything about Base...." className="form-control my-2"style={{height:'90px',backgroundColor:'rgb(13,13,13)', border:'none', borderRadius:'15px',color:'white'}} onChange={(e)=>setquestion(e.target.value)}>
        </textarea>
        {loading ? (
                <div class="d-flex justify-content-center">
                  <div class="spinner-border text-primary" role="status">
                    <span class="sr-only">Loading...</span>
                  </div>
                </div>
              ) : (
                ""
              )}
              <div style={{color:'red',textAlign:'center'}}>{errorMessage}</div>
        <div className="sendBtnDiv">
        
        <button className="sendBtn" onClick={ask}><i class="fa-solid fa-arrow-up"></i></button> <br /><br />
        </div>
        </div>
      </div>
      </center>
    </>
  )
}

export default LandingPage;