import React, { Component } from 'react'
import './Header.scss'
import Logo from '../../assets/img/Logo.png'
import { BsBrightnessHigh } from 'react-icons/bs'
import { MdBrightness2 } from 'react-icons/md'

export class Header extends Component {
	render() {
		function ChangeLight() {
			document.getElementById('tema').setAttribute('data-theme', 'light')
			document.getElementById('themeToggle').className = "d-none"
			document.getElementById('themeToggle2').className = "d-block"
		}
		function ChangeDark() {
			document.getElementById('tema').setAttribute('data-theme', 'dark')
			document.getElementById('themeToggle').className = "d-block"
			document.getElementById('themeToggle2').className = "d-none"
		}


		return (

			<header class="header-area overlay">
				<nav class="navbar navbar-expand-md navbar-dark">
					<div class="container">
						<a href="/" class="navbar-brand mt-2"><img src={Logo} alt="" /> </a>

						<button type="button" class="navbar-toggler collapsed" data-toggle="collapse" data-target="#main-nav">
							<span class="menu-icon-bar"></span>
							<span class="menu-icon-bar"></span>
							<span class="menu-icon-bar"></span>
						</button>

						<div id="main-nav" class="collapse navbar-collapse">
							<ul class="navbar-nav ml-auto">
								<li><a href="#sobre" class="nav-item nav-link">Sobre</a></li>
								<li><a href="#skills" class="nav-item nav-link">Skills</a></li>
								<li>
									<a href="#portfolio" class="nav-item nav-link">Projetos</a>
								</li>

								<li><a href="#contato" class="nav-item nav-link">Contato</a></li>
								<li> <button id="themeToggle" onClick={ChangeLight} className=""  ><BsBrightnessHigh /></button></li>
								<li> <button id="themeToggle2" onClick={ChangeDark} className=" d-none"  ><MdBrightness2 /></button></li>
							</ul>

						</div>
					</div>


				</nav>

			</header >



		)
	}

}