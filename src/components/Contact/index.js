import { useRef } from 'react'
import Loader from 'react-loaders'
import './index.scss'
import emailjs from '@emailjs/browser'
import {
    faPython,
    faCss3,
    faGitAlt,
    faHtml5,
    faJava,
    faRProject,
    faReact,
    faJs,
    faLinode,
    faDocker,
    faAws,
    faLinux,
    faWindows,
    faApple,
  } from '@fortawesome/free-brands-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

  


const Contact = () => {
    const refForm = useRef()
    const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs
          .sendForm('service_b9t7ess', 'template_mm6s2ab', refForm.current, 'aiwIseiqbU7dzTeFS')
          .then(
            () => {
              alert('Message successfully sent!')
              window.location.reload(false)
            },
            () => {
              alert('Failed to send the message, please try again')
            }
          )
      }
    return(
        <>
        <div className="container contact-page">
            <div className="text-zone">
            <h1>
                Contact Me
            </h1>
            <p>
                I am interested in internships, job offers, or any other questions you may have for me. 
                Feel free to reach out with any questions you may have as well.
            </p>
            <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input 
                  placeholder="Name" 
                  type="text" 
                  name="name" 
                  required
                  />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
            </div>
            <div className="cube-container">
                <div className='skillcube'>
                    <div className="face1">
                        <FontAwesomeIcon icon={faPython} color="#646464" />
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faJava } color="#DD0031" />
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faJs} color="#EFD81D" />
                    </div>
                </div>
            </div>
        </div>
        <Loader type='pacman'/>
        </>
    )
}

export default Contact