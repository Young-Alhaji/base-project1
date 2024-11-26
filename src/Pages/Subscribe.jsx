import React from 'react'
import styles from "../CSS/signin.module.css";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Subscribe = () => {
  const [email, setemail] = useState('')
  const [loading, setloading] = useState(false)
  const [message, setmessage] = useState('')
  const [subMessage, setsubMessage] = useState('')

  const subscribe=async()=>{
    if(!email){
        setmessage('Input required')
        return;
    }
    setloading(true)
    setmessage('')
    setsubMessage('')
    try {
      const url = `https://base-network-agent.onrender.com/user/subscriber_mail?email=${encodeURIComponent(email)}`;
      const response = await fetch(url, {
          method: 'POST',
          headers: {
              Accept: 'application/json',
          },
      });

      if (!response.ok) {
          const errorData = await response.json();
          console.error('Error Response:', errorData);
          console.log(errorData.detail)
          setloading(false);
          setsubMessage('')
          setmessage(errorData.detail)
          return;
      }
      setloading(false);
      const data = await response.json();
      console.log('Success:', data);
      console.log(data)
      setmessage('')
      setsubMessage(data.message)
  } catch (error) {
      console.error('Error:', error.message);
  }
    //     setloading(true)
    //     setmessage('')
    //     const payload = {email}
    //     const url = 'https://base-network-agent.onrender.com/user/subscriber_mail';
    //     try {
    //         console.log(payload)
    //         const response = await fetch(url, {
    //           method: 'POST',
    //           headers: {
    //             'Content-Type': 'application/json',
    //           },
    //           body: JSON.stringify(payload),
    //         });
    //         setloading(false);
    //         // setemail('')
        
    //         if (!response.ok) {
    //           // Handle non-2xx HTTP responses
    //           const errorData = await response.json();
    //           console.error('Error:', errorData);
    //           throw new Error(`Request failed with status ${response.status}`);
    //         }    
    //           const data = await response.json(); // Parse the JSON response
    //           console.log(data)
    //         //     setreply(data.content)
    //         //     console.log(reply)  
    //         // console.log('Response:', data);
    //       } catch (error) {
    //   console.error('Fetch error:', error.message);
    // }   
  }

  return (
    <>
    <center>
      <section className='boldpoppins'>
      <br /><br /><br /><br /><br /><br /><br /><br />
        <div>
    <img src="logo.png" width="50" height="50" style={{borderRadius:'1000px'}} alt=""/>
        </div> <br />
       
        <div>
        <i style={{fontSize: '120%'}} className="fa-solid fa-envelope"></i>  <input className={styles.input}
          type="text"
          placeholder='Email' id='email' name='email' value={email}
          onChange={(e)=>setemail(e.target.value)}/> <br /> <br />
            <div style={{color:'red'}}>{message}</div>
            <div style={{color:'rgb(13, 110, 253)'}}>{subMessage}</div>
        
           {loading ? (
              <div className="d-flex justify-content-center">
                <div className="spinner-border text-primary" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            ) : (
              ""
            )} <br />
            

          <button className='btn btn-primary' style={{width: '300px',fontWeight: 'bold'}} onClick={subscribe}>Subscribe</button> <br /><br />
          

        </div>
      </section>
    </center>
    </>
  )
}

export default Subscribe;