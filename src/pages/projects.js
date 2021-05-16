import React from 'react';
import ProjectData from '../components/ProjectData/index';
import ProjectCard from '../components/ProjectCard/index';

const Projects = () => {
    return (
        <div className='container-fluid projectSection'>
        <br></br>
            <div className='row'>
                <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 mx-auto center'>
                    <h2>Portfolio Projects <span className='blink'>_</span> </h2>
                </div>
            </div>
            <br></br>
            <div className='row'>
                {ProjectData.map((data) => {
                    return (
                        <ProjectCard 
                            key={data.id}
                            title={data.title}
                            description={data.description}
                            image={data.image}
                            repository={data.repository}
                            URL={data.URL}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Projects;