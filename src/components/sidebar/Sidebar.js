import React from 'react'
import "./sidebar.css"
import {
  Timeline, TrendingUp, Toc, PersonOutline,
  Storefront, AttachMoney, BarChart, MailOutline,
  DynamicFeed, ChatBubbleOutline, BusinessCenter, Report
} from '@material-ui/icons'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
        <div className='list'>
          <div className='listTitle'>Dashboard</div>
          <ul className='listitemContainer'>
            <li className='item'>
              <Toc className='itemIcon' />Home
            </li>
            <li className='item'>
              <Timeline className='itemIcon' /> Analytics
            </li>
            <li className='item'>
              <TrendingUp className='itemIcon' />sales
            </li>
          </ul>
        </div>
        <div className='list'>
          <div className='listTitle'>Quick Menu</div>
          <ul className='listitemContainer'>
            <li className='item'>
              <PersonOutline className='itemIcon' />Users
            </li>
            <li className='item'>
              <Storefront className='itemIcon' /> Products
            </li>
            <li className='item'>
              <AttachMoney className='itemIcon' />Transaction
            </li>
            <li className='item'>
              <BarChart className='itemIcon' />Reports
            </li>
          </ul>
        </div>
        <div className='list'>
          <div className='listTitle'>Notifications</div>
          <ul className='listitemContainer'>
            <li className='item'>
              <MailOutline className='itemIcon' />Mail
            </li>
            <li className='item'>
              <DynamicFeed className='itemIcon' /> Feedback
            </li>
            <li className='item'>
              <ChatBubbleOutline className='itemIcon' />Messages
            </li>
          </ul>
        </div>
        <div className='list'>
          <div className='listTitle'>Staff</div>
          <ul className='listitemContainer'>
            <li className='item'>
              <BusinessCenter className='itemIcon' />Manage
            </li>
            <li className='item'>
              <Timeline className='itemIcon' /> Analytics
            </li>
            <li className='item'>
              <Report className='itemIcon' />Sales
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
