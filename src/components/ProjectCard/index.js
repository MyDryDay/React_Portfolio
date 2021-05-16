import React from 'react';

const ProjectCard = (props) => {
    return (
        <div className='col-xs-8 col-sm-8 col-md-8 col-lg-6 mx-auto'>
            <div class='mx-auto'>
                <img src={props.image} alt={props.title} className='img-fluid rounded'></img>
                <div className='overlay'>
                    <div className='headerText'>{props.title}</div>
                    <p>{props.description}</p>
                    <a href={props.repository} target='_blank' rel='noopener noreferrer'>GitHub Repo</a>
                    <a href={props.URL} target='_blank' rel='noopener noreferrer'>Live URL</a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;