import React ,{useState} from 'react'
import "../header/header.css";
import MenuIcon from '@mui/icons-material/Menu';
import logo from "../../ASSETS/logo.png";
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';

const Header = () => {
  const [inputSearch, setInputSearch] = useState('');
  return (
    <div className='header'>
        <div className='header_left'>
            <MenuIcon/>
            <Link to='/'>
            <img src={logo} alt='' className='header_logo'/>
            </Link>
        </div>
        <div className='header_center'>
            <input type='text'  onChange={(e) => setInputSearch(e.target.value)} value={inputSearch}/>
            <Link to={`/search/${inputSearch}`} >
            <SearchIcon className='header
            _searchbutton'/>
           </Link>
        </div>
        <div className='header_right'>
            <VideoCallIcon className='header_icon'/>
            <NotificationsNoneIcon className='header_icon'/>
            <Avatar className='header_icon'/>

        </div>

      
    </div>
  )
}

export default Header
