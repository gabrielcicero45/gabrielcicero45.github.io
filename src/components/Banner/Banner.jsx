import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import TypeWriter from '../Functions/Typewriter/TypeWriter'
import './Banner.scss'
import slide1 from '../../assets/img/slide1.png'
import slide2 from '../../assets/img/slide2.png'
import curriculo from '../../assets/Curriculum_vitae-Cicero_gabriel.pdf'


export class Banner extends Component {
    render() {
        const controls = false
        const indicators = false
        return (
            <section className="banner-area">
                <div className="container p-4">
                    <div className="row">
                        <div className="col-md-6 col-4 ">
                            <div className="banner-text-area">
                                <p className="banner-title">Full-Stack Developer</p>
                                <p className="banner-name"><TypeWriter time={200} text="Cicero Gabriel" /></p>
                                <p className="banner-text "><TypeWriter time={1400} text="I'm searching for an opportunity to change the world through technology ..." /></p>
                                <a href={curriculo} className="banner-curriculum btn" download><p className="curriculum-text"> Baixar Curriculo</p></a>
                            </div>


                        </div>

                        <div className="col-md-6 col-8  pt-4 mt-md-4 mt-0 ">
                            <Carousel controls={controls} indicators={indicators} >
                                <Carousel.Item interval={3500}>
                                    <img src={slide2} className="d-block w-100 img-fluid" alt="..." />
                                </Carousel.Item>
                                <Carousel.Item interval={3500}>
                                    <img src={slide1} className="d-block w-100 img-fluid" alt="..." />
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </section>

        )


    }

}