import React from 'react'
import { Link } from 'react-router-dom'
import './About.css'
import Details from './details/Details'
import Experiences from './Experiences/Experiences'
export default function About() {
    return (
        <>
            <div className="bodyCon bodyHome bodyAbout">
                <div className="bodyComponent projectComponent">
                    <div className="aboutContent">

                        <div className="aboutHeading">
                            <h1>About Me</h1>
                        </div>
                        <div className="aboutMe">
                            <h2><span>I'm sahil khan and</span>
                                <span className='red'>Web Developer</span>
                            </h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis veritatis libero alias veniam quis mollitia suscipit autem esse beatae harum ratione consectetur id error totam magnam, voluptatem pariatur voluptates perspiciatis.
                                Nam harum mollitia voluptates amet. Ea, nesciunt iusto nisi accusamus deserunt repudiandae. Perspiciatis fuga repudiandae reprehenderit, cum maiores voluptatum modi iusto mollitia incidunt eligendi soluta laboriosam nesciunt eius nihil neque.
                                Libero molestias vero vitae ullam dolor nihil repellendus illum in eos sed, aliquid eligendi doloribus nesciunt voluptatum, ex est sit minus eaque explicabo deserunt minima reprehenderit rerum iure. Culpa, aspernatur.
                                Quo aliquam beatae explicabo amet iusto ipsa a corporis tenetur excepturi ipsam. Molestiae animi eos quos illo corporis impedit, quae fugit quisquam expedita soluta voluptatibus dolor, error hic perferendis explicabo.
                                Tempore accusamus non, consequuntur fugit quia quibusdam magni, facilis harum aliquid, voluptates quo dolor provident? Debitis libero cumque in officia temporibus sit eaque, similique soluta adipisci sunt dignissimos dolores earum.</p>
                        </div>
                        <div className='detail'>
                            <div className="detailDiv">
                                <Details Heading='Birthday' p='10 oct 2001' />
                                <Details Heading='Age' p='21' />
                                <Details Heading='Website' p='https://zer-0ne.github.io/zer0ne' />
                                <Details Heading='Email' p='sahilkhan8294799@gmail.com' />
                                <Details Heading='Degree' p='Computer Science' />
                                <Details Heading='Phone' p='+91 7982408995' />
                                <Details Heading='City' p='Ghaziabad' />
                                <Details Heading='Freelance' p='Available' />
                            </div>
                            <div className="ex">
                                <Experiences head='HTML' width='95%' />
                                <Experiences head='CSS' width='90%' />
                                <Experiences head='JS' width='80%' />
                                <Experiences head='REACT JS' width='90%' />
                                <Experiences head='NODE JS' width='70%' />
                                <Experiences head='PYTHON' width='80%' />
                            </div>
                        </div>
                            <Link to='/zer0ne/project'>
                                <button className='btn'>Projects</button>
                            </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
