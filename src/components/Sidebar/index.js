import React from 'react';
import SidebarRow from '../SidebarRow'
import './Sidebar.css';

//Icons
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarRow title='Mauricio Restrepo' src='https://scontent-bog1-1.xx.fbcdn.net/v/t1.0-9/117768003_10213699494679956_8242121611560796211_o.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=42wDlvyuYM8AX94BCXc&_nc_ht=scontent-bog1-1.xx&oh=a1da40516fe41a02fc2d28039bad332a&oe=6075B8EC' />
      <SidebarRow Icon={LocalHospitalIcon} title='Pages' />
      <SidebarRow Icon={EmojiFlagsIcon} title='Pages' />
      <SidebarRow Icon={PeopleIcon} title='Friends'/>
      <SidebarRow Icon={ChatIcon} title='Messenger'/>
      <SidebarRow Icon={StorefrontIcon} title='Marketplace'/>
      <SidebarRow Icon={VideoLibraryIcon} title='Videos'/>
      <SidebarRow Icon={ExpandMoreIcon} title='MarketPlace'/>
    </div>
  );
}

export default Sidebar;
