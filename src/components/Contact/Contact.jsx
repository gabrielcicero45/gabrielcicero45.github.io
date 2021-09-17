import React, { Component } from 'react'

import './Contact.scss'

import SendEmail from '../Functions/SendEmail/SendEmail'

export class Contact extends Component {

    render() {
        return (<SendEmail></SendEmail>)
    }
}