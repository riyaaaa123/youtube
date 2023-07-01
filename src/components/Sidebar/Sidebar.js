import React from 'react'
import "../Sidebar/sidebar.css"
import SidebarRow from '../Sidebarrow/SidebarRow.js';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import AlarmIcon from '@mui/icons-material/Alarm';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <SidebarRow Icon={HomeIcon} title="Home"/>
      <SidebarRow Icon={WhatshotIcon} title="Trending"/>
      <SidebarRow Icon={SubscriptionsIcon} title="Subscription"/>
      <hr/>
      <SidebarRow Icon={VideoLibraryIcon} title="Library"/>
      <SidebarRow Icon={HistoryIcon} title="History"/>
      <SidebarRow Icon={SlideshowIcon} title="Your Videos"/>
      <SidebarRow Icon={AlarmIcon} title="Watch Later"/>
      <SidebarRow Icon={ThumbUpOffAltIcon} title="Liked Videos"/>
      <hr/>

      
    </div>
  )
}

export default Sidebar
