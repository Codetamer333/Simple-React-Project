import React from 'react';

function Main () {
    return (
      <div className="maincontainer">
              <h1 className="name">Laura Smith</h1>
              <h3 className="title">Frontend Developer</h3>
              <h4 className="website">laurasmith.website</h4>
              <div className="buttonscontainer">
                <button className="emailbut">Email</button>
                <button className="linkedinbut">Linkedin</button>
              </div>
            <div className="aboutcontainer">
                <h3 className="about">About</h3>
                <p className="aboutp">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                <h3 className="interests">Interests</h3>
                <p className="interestsp">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>
      </div>  
     
    )
}
export default Main;