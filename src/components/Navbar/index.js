import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    AiOutlineHome,
    AiOutlineUser,
    AiOutlineProject,
    AiOutlineDownload
} from 'react-icons/ai';
import CV from '../../cv/CV_v1.pdf'

const Navbar = () => {
    const [expanded, setExpanded] = useState(true);
    const expandNav = () => setExpanded(!expanded);

    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <div className='container-fluid'>
                <a className='navbar-brand' href='https://github.com/MyDryDay' target='_blank' rel='noopener noreferrer'>George Cope</a>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarExpand' aria-controls='navbarExpand' aria-expanded={expanded ? true : false} aria-label='Toggle Expand' onClick={expandNav}>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className={`${expanded ? 'collapse' : ''} navbar-collapse`} id='navbarExpand'>
                    <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                        <li className='nav-item'>
                            <Link 
                                to='/'
                                className={window.location.pathname === '/' ? 'nav-link active' : 'nav-link'}    
                            > <AiOutlineHome style={{marginBottom: '2px'}} /> Home </Link>
                        </li>
                        <li className='nav-item'>
                            <Link 
                                to='/about'
                                className={window.location.pathname === '/about' ? 'nav-link active' : 'nav-link'}
                            > <AiOutlineUser style={{marginBottom: '2px'}} /> About Me </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/projects'
                                className={window.location.pathname === '/projects' ? 'nav-link active' : 'nav-link'}
                            > <AiOutlineProject style={{marginBottom: '2px'}} /> Projects </Link>
                        </li>
                        <li className='nav-item'>
                            <a href={CV} className='nav-link' target='_blank' rel='noopener noreferrer'> <AiOutlineDownload style={{marginBottom: '2px'}} /> CV </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;