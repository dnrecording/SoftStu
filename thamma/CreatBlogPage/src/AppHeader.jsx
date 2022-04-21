import React from 'react'
import './AppHeader.css'

export default function TopBar () {
    return (
        <div className = "top">
            <div className='topLeft'>
                T H A M M A
            </div>
            <div className='topCenter'>
                <div class='tabbar'>
                    <i class="fa-solid fa-newspaper"></i>
                    <a href="#">Feeds</a>
                </div>
                <div className='tabbar'>
                    <i class="fa-solid fa-user" style={{marginLeft:"3px"}}></i>
                    <a href="#">Profile</a>
                </div>
            </div>
            <div className='topRight'>
                <p>Get Started</p>
            </div>
        </div>
    )
}