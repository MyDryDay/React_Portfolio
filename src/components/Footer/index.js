import React from 'react';
import {
    AiOutlineGithub,
    AiOutlineLinkedin
} from 'react-icons/ai';

const Footer = () => {
    return (
        <div className='container-fluid footer'>
            <div className='row'>
                <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                    <div className='h-10 p-5 m-0 text-white bg-dark center'>
                        <a href='https://github.com/MyDryDay' className='footerLink' target='_blank' rel='noopener noreferrer'> <AiOutlineGithub /> </a>
                        <a href='https://www.linkedin.com/in/gcope97/' className='footerLink' target='_blank' rel='noopener noreferrer'> <AiOutlineLinkedin /> </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;