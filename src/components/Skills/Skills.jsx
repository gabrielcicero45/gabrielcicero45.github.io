import React, { Component } from 'react'

import Flickity from 'react-flickity-component'

import './Skills.scss'
import html5 from '../../assets/img/html5.png'
import css3 from '../../assets/img/css3.png'
import js from '../../assets/img/js.png'
import boot from '../../assets/img/boot.png'
import django from '../../assets/img/django.png'




export class Skills extends Component {
    render() {
        const flickityOptions = {
            initialIndex: 2
        }

        return (
            <section id="skills" className="skills-area">
                <div className="container ">
                    <div className="row">
                        <div className="col">
                            <h2 className="skills-title">Skills</h2>
                            <Flickity
                                className={'carousel'}
                                elementType={'div'}
                                options={flickityOptions}
                                disableImagesLoaded={false}
                                reloadOnUpdate

                            >
                                <img src={html5} alt="..." />
                                <img src={css3} alt="..." />
                                <img src={js} alt="..." />
                                <img src={django} alt="..." />
                                <img src={boot} alt="..." />
                            </Flickity>
                        </div>
                    </div>
                </div>
            </section>

        )


    }

}