import React from 'react'
import logo from '../images/image-no-backgorund.png'



function Main(){

const linkedinClick= (e) => {
    e.preventDefault();
    window.location.href='https://www.linkedin.com/in/marco-le-piane/';
    }

    const mailClick= (e) => {
        window.location.href='mailto:marcolepiane@gmail.com';
        }

    return(
        <div className='main-container' style={{backgroundColor:"black"}}>
            <img src={logo} alt="myimage" width="200px"/>
            <h1>Marco Le Piane</h1>
            <h2>Frontend Web Developer</h2>
            <div id="social-media">
                <button onClick={mailClick} className="btn" id="email-btn">  <i className="fas fa-envelope"></i>Email</button>
                <button onClick={linkedinClick}  target="_blank" className="btn" id="linkedin-btn"><i className="fab fa-linkedin"></i>Linkedin</button>
            </div>
        </div>
        
    )
}


export default Main