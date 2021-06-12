import React, { Component } from 'react'
import './Header.scss'
import Logo from '../../assets/img/Logo.png'

export class Header extends Component {
	render() {

		return (

			<header class="header-area overlay">
				<nav class="navbar navbar-expand-md navbar-dark">
					<div class="container">
						<a href="home" class="navbar-brand mt-2"><img src={Logo} alt="" /> </a>

						<button type="button" class="navbar-toggler collapsed" data-toggle="collapse" data-target="#main-nav">
							<span class="menu-icon-bar"></span>
							<span class="menu-icon-bar"></span>
							<span class="menu-icon-bar"></span>
						</button>

						<div id="main-nav" class="collapse navbar-collapse">
							<ul class="navbar-nav ml-auto">
								<li><a href="#sobre" class="nav-item nav-link">Sobre</a></li>
								<li><a href="#skills" class="nav-item nav-link">Skills</a></li>
								<li class="dropdown">
									<a href="#" class="nav-item nav-link" data-toggle="dropdown">Projetos</a>
								</li>

								<li><a href="#" class="nav-item nav-link">Contato</a></li>
								<li></li>
							</ul>

						</div>
					</div>


				</nav>

			</header >



		)
	}

}