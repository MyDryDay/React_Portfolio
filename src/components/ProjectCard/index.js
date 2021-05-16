import React from 'react';

const ProjectCard = (props) => {
    return (
        <div className='col-xs-8 col-sm-8 col-md-8 col-lg-6 mx-auto'>
            <div class='mx-auto projectContainer'>
                <img src={props.image} alt={props.title} className='img-fluid rounded projectImg'></img>
                <div className='overlay'>
                    <div className='headerText'>{props.title}</div>
                    <p>{props.description}</p>
                    <a href={props.repository} className='linkRepo' target='_blank' rel='noopener noreferrer'>GitHub Repo</a>
                    <a href={props.URL} className='linkApp' target='_blank' rel='noopener noreferrer'>Live URL</a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;