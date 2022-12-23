import React from 'react';
import { Link } from 'react-router-dom';
import './Project.css';
import Template from './template/Template.js';
import Python from '../../media/Python.jpg'
import html from '../../media/html.webp';
import JS from '../../media/js.png'
import Node from '../../media/node.jpeg'
import reactjs from '../../media/React.png';
import css from '../../media/css.png';

export default function Project() {
    return (
        <>
            <div className="bodyCon projectCon">
                <div className="bodyComponent projectComponent">
                    <div className="aboutHeading projectHeading">
                        <h1>Projects</h1>
                        <div className="container">
                            <div className="projects">
                                <Link to='/zer0ne/project/python'>
                                    <Template img={Python} />
                                </Link>
                                <Link to='/zer0ne/project/js'>
                                    <Template img={JS} />
                                </Link>
                                <Link to='/zer0ne/project/nodejs'>
                                    <Template img={Node} />
                                </Link>
                            
                                <Link to='/zer0ne/project/reactjs'>
                                    <Template img={reactjs} />
                                </Link>
                                <Link to='/zer0ne/project/html'>
                                    <Template img={html} />
                                </Link>
                                <Link to='/zer0ne/project/css'>
                                <Template img={css} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
