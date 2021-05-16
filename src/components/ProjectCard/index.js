import React from 'react';
import { AiOutlineGithub } from 'react-icons/ai';
import { CgWebsite } from 'react-icons/cg';

const ProjectCard = (props) => {
    return (
        <div className='col-xs-8 col-sm-8 col-md-8 col-lg-6 projectCard mx-auto'>
            <div class='mx-auto projectContainer'>
                <img src={props.image} alt={props.title} className='img-fluid rounded projectImg'></img>
                <div className='overlay'>
                    <div className='headerText'>{props.title}</div>
                    <a href={props.repository} className='linkRepo' target='_blank' rel='noopener noreferrer'> <AiOutlineGithub /> </a>
                    <a href={props.URL} className='linkApp' target='_blank' rel='noopener noreferrer'> <CgWebsite /> </a>
                </div>
            </div>
            <p className='description'>{props.description}</p>
        </div>
    )
}

export default ProjectCard;