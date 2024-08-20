import React from 'react'
import './Dashboard.css'
import appIcon from '../../public/cakelaya.png?url'
import homeIcon from '../../public/home.png?url'
import accounIcon from '../../public/account.png?url'
import notification from '../../public/notification.png?url'
import logout from '../../public/logout-icon.png?url'
import Cards from './Cards'
import customer from '../../public/customers.png?url'
import merchant from '../../public/merchants.png?url'

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
                <div id='lower-one'>
                </div>
                <div id='lower-two'>
                    <div id='select'>
                        <select id='date'>
                            <option value={"Today"}>Today</option>
                        </select>
                        <select id='city'>
                            <option value={"City"}>City</option>
                        </select>
                    </div>
                    <div id='cards'>
                        <Cards img={customer} name="Customers"/>
                        <Cards img={merchant} name="Merchants"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DashBoard