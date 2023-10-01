import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';

const useStyles= makeStyles({
  root:{
    width:390,
    position: 'fixed',
    bottom: 0,
    zIndex:100,
    backgroundColor:'indigo!important',
    boxShadow:'0 -5px 5px -5px white'  
  }
})

export const  BottomNav=()=> {
    const classes=useStyles()

  return (
    <Box sx={{ display:'flex', justifyContent:'center' }}>
      <BottomNavigation
        showLabels
        value={useLocation().pathname}
       className={classes.root}
       sx={{"& .Mui-selected, .Mui-selected > svg": {color: "white" },"& svg":{color:'#b6b6b4'}}}


      >
        <BottomNavigationAction label="Trending" icon={<TrendingUpIcon />} 
            component={NavLink}
            value='/'
            to='/'
        />
        <BottomNavigationAction label="Movies" icon={<LocalMoviesIcon />} 
        component={NavLink}
        value='/movies'
        to='/movies'/>
        <BottomNavigationAction label="Series" icon={<DesktopWindowsIcon />} 
        component={NavLink}
        value='/series'
        to='/series'/>

<BottomNavigationAction label="Search" icon={<SearchIcon />} 
        component={NavLink}
        value='/search'
        to='/search'/>

      <BottomNavigationAction label="Actors" icon={<PersonIcon />} 
        component={NavLink}
        value='/actors'
        to='/actors'/>
      </BottomNavigation>

    </Box>
  );
}