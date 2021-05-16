import React from 'react';
import {
    AiOutlineMail,
    AiOutlineGithub,
    AiOutlineLinkedin
} from 'react-icons/ai';
import { FaTelegramPlane } from 'react-icons/fa';
import displayImage from '../images/JapanTrip1.jpg';

const About = () => {
    return (
        <div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='aboutSection'>
                        <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                            <div className='h-100 p-5 m-0 text-white bg-dark'>
                                <h2 className='center'>George Cope, Web-Developer <span className='blink'>_</span> </h2>
                                <img src={displayImage} className='mx-auto d-block img-fluid rounded-circle img' alt='Osaka, Japan'></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='container-fluid'>
                <div className='row'>
                    <div className='aboutSection'>
                        <br></br>
                        <h3 className='center'>About Me</h3>
                        <br></br>
                        <div className='objectDiv col-xs-8 col-sm-8 col-md-8 col-lg-6 mx-auto'>
                            &#123; 
                                <p className='tab'>
                                    <span className='objKey'>name</span>: <span className='objString'>"George Cope"</span>, <br></br>
                                    <span className='objKey'>pronouns</span>: <span className='objString'>"he/him"</span>, <br></br>
                                    <span className='objKey'>location</span>: <span className='objString'>"Stratford-Upon-Avon"</span>, <br></br>
                                    <span className='objKey'>age</span>: <span className='objInt'>23</span>, <br></br>
                                    <span className='objKey'>occupation</span>: <span className='objString'>"Student"</span>, <br></br>
                                    <span className='objKey'>interests</span>: [<span className='objString'>"reading"</span>, <span className='objString'>"walking"</span>, <span className='objString'>"gaming"</span>, <span className='objString'>"puzzles"</span>], <br></br>
                                    <span className='objKey'>skills</span>: &#123; <br></br>
                                        <p className='tab'>
                                            <span className='objKey'>soft skills</span>: [<span className='objString'>"communication"</span>, <span className='objString'>"critical thinking"</span>, <span className='objString'>"problem solving"</span>, <span className='objString'>"patience"</span>, <span className='objString'>"time management"</span>], <br></br>
                                            <span className='objKey'>hard skills</span>: [<span className='objString'>"HTML & CSS"</span>, <span className='objString'>"javascript & jquery"</span>, <span className='objString'>"github"</span>, <span className='objString'>"heroku"</span>, <span className='objString'>"node js"</span>, <span className='objString'>"mySQL"</span>, <span className='objString'>"mongoDB"</span>, <span className='objString'>"webpack"</span>, <span className='objString'>"react"</span>] <br></br>
                                        </p>
                                    &#125;, <br></br>
                                    <span className='objKey'>contact</span>: &#123;
                                        <p className='tab'>
                                            <span className='objKey'>#1</span>: <a href='https://www.linkedin.com/in/george-cope-633b761bb/' className='objLink' target='_blank' rel='noopener noreferrer'>LinkedIn <AiOutlineLinkedin /></a> <br></br>
                                            <span className='objKey'>#2</span>: <a href='https://github.com/MyDryDay' className='objLink' target='_blank' rel='noopener noreferrer'>GitHub <AiOutlineGithub /></a> <br></br>
                                            <span className='objKey'>#3</span>: <a href='https://t.me/G_Cope97' className='objLink' target='_blank' rel='noopener noreferrer'>Telegram <FaTelegramPlane /></a> <br></br>
                                            <span className='objKey'>#4</span>: <a href='mailto: g.cope13@gmail.com' className='objLink' target='_blank' rel='noopener noreferrer'>Email <AiOutlineMail /></a>
                                        </p>
                                    &#125;
                                </p>
                            &#125; <span className='blink'>_</span>
                        </div>
                        <br></br>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;


