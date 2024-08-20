import React from 'react'
import './Dashboard.css'
import appIcon from '../../public/cakelaya.png?url'
import homeIcon from '../../public/home.png?url'
import accounIcon from '../../public/account.png?url'
import notification from '../../public/notification.png?url'
import logout from '../../public/logout-icon.png?url'

function DashBoard() {
  return (
    <div className='dashboard'>
        <div id='first-box'>
            <div id='app-icon'>
                <img src={appIcon}></img>
            </div>
            <div id='main-box'>
                <div>
                <div className='icons'>
                        <img src={homeIcon} className='main-icons'></img>Home
                </div>
                <div className='icons'>
                        <img src={accounIcon} className='main-icons'></img>Account Approval
                </div>
                </div>             
            </div>
            <div id='logout'>
                <button id='log-out-btn'>
                    <img src={logout} id='logout-icon'></img>
                    Log out
                </button>
            </div>
        </div>
        <div id='second-box'>
            <div id='upper'>
                <div id='head-div'>
                    <div id='head-child'>
                        <h2>Dashboard</h2><br/>
                        Hi Samantha, Welcome back to Admin Panel! 
                    </div>
                </div>
                <div id='plain-div'></div>
                <div id='profile-div'>
                    <img src={notification}></img>
                    <div id='profile-pic'></div>
                </div>
            </div>
            <div id='lower'>
                
            </div>
        </div>
    </div>
  )
}

export default DashBoard