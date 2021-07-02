import React, { Component } from 'react'

import Flickity from 'react-flickity-component'
import { FaHtml5, FaCss3Alt, FaJs, FaPhp, FaNode, FaPython, FaSass, FaBootstrap, FaJava, FaReact, FaWordpress, FaAngular } from "react-icons/fa";

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
            <section id="skills" className="skills-area bg-binary">
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
                            <main class="wrapper">
                                <article class="badge orange">
                                    <div class="rounded"><FaHtml5></FaHtml5></div>
                                </article>
                                <article class="badge blue">
                                    <div class="rounded"><FaCss3Alt></FaCss3Alt></div>
                                </article>
                                <article class="badge gold">
                                    <div class="rounded"><FaJs></FaJs></div>
                                </article>
                                <article class="badge purple">
                                    <div class="rounded"><FaPhp></FaPhp></div>
                                </article>
                                <article class="badge green">
                                    <div class="rounded"><FaNode></FaNode></div>
                                </article>
                                <article class="badge steel">
                                    <div class="rounded"><FaPython></FaPython></div>
                                </article>
                                <article class="badge pink">
                                    <div class="rounded"><FaSass></FaSass></div>
                                </article>
                                <article class="badge rebecca">
                                    <div class="rounded"><FaBootstrap></FaBootstrap></div>
                                </article>
                                <article class="badge gainsboro">
                                    <div class="rounded"><FaJava></FaJava></div>
                                </article>
                                <article class="badge blue">
                                    <div class="rounded"><FaReact></FaReact></div>
                                </article>
                                <article class="badge steel">
                                    <div class="rounded"><FaWordpress></FaWordpress></div>
                                </article>
                                <article class="badge crimson">
                                    <div class="rounded"><FaAngular></FaAngular></div>
                                </article>
                            </main>
                        </div>
                    </div>
                </div>
            </section >

        )


    }

}