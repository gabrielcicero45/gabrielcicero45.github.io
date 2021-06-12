import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import TypeWriter from '../Typewriter/TypeWriter'
import './Banner.scss'
import slide1 from '../../assets/img/slide1.png'
import slide2 from '../../assets/img/slide2.png'


export class Banner extends Component {
    render() {
        const controls = false
        const indicators = false
        return (
            <section className="banner-area">
                <div className="container p-4">
                    <div className="row">
                        <div className="col-6">
                            <div className="banner-text-area">
                                <p className="banner-title">Full-Stack Developer</p>
                                <p className="banner-name"><TypeWriter time={200} text="Cicero Gabriel" /></p>
                                <p className="banner-text"><TypeWriter time={1400} text="I'm searching for an opportunity to change the world through technology ..." /></p>
                                <button className="banner-curriculum"><p className="curriculum-text"> Baixar Curriculo</p></button>
                            </div>


                        </div>
                        <div className="col-6 pt-4 mt-4 ">
                            <Carousel controls={controls} indicators={indicators} >
                                <Carousel.Item interval={3500}>
                                    <img src={slide2} className="d-block w-100" alt="..." />
                                </Carousel.Item>
                                <Carousel.Item interval={3500}>
                                    <img src={slide1} className="d-block w-100" alt="..." />
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </section>

        )


    }

}