import React from 'react';
import {
    AiOutlineMail,
    AiOutlineGithub,
    AiOutlineLinkedIn
} from 'react-icons/ai';
import FaTelegramPlane from 'react-icons/fa';
import displayImage from '../images/JapanTrip1.jpg';

const About = () => {
    return (
        <div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                        <div class="h-100 p-5 text-white bg-dark">
                            <h2 className='center'>George Cope, Web-Developer <span className='blink'>_</span> </h2>
                            <img src={displayImage} className='mx-auto d-block img-fluid rounded-circle img' alt='Osaka. Japan'></img>
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
                        <div className='objectDiv col-xs-12 col-sm-6 col-md-6 col-lg-6'>
                            &#123; 
                                <p className='tab'>
                                    <span className='objKey'>name</span>: <span className='objString'>"George Cope"</span>, <br></br>
                                    <span className='objKey'>pronouns</span>: <span className='objString'>"he/him"</span>, <br></br>
                                    <span className='objKey'>location</span>: <span className='objString'>"Stratford-Upon-Avon"</span>, <br></br>
                                    <span className='objKey'>age</span>: <span className='objInt'>23</span>, <br></br>
                                    <span className='objKey'>occupation</span>: <span className='objString'>"Student"</span>, <br></br>
                                    <span className='objKey'>interests</span>: [<span className='objString'>"reading"</span>, <span className='objString'>"walking"</span>, <span className='objString'>"gaming"</span>, <span className='objString'>"puzzles"</span>], <br></br>
                                </p>
                            &#125; <span className='blink'>_</span>
                        </div>
                        <div className='statementDiv col-xs-12 col-sm-6 col-md-6 col-lg-6'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptatum ipsum excepturi enim nemo tempore pariatur corporis ipsam necessitatibus harum. Facere minus, consequuntur itaque provident eius laboriosam ipsa libero beatae.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;


