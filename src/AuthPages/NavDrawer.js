import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home'; 
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonIcon from '@material-ui/icons/Person';
import MenuIcon from '@material-ui/icons/Menu';

import Tooltip from '@material-ui/core/Tooltip';


const useStyles = makeStyles({
  list: {
    width: 250,
    height: 1000,
    color:'black',
    backgroundColor: 'white',
    

  },
  fullList: {
    width: 'auto',
    backgroundColor: 'black'
  },

});

export function NavDrawer( props ) {
  console.log(props);
  const classes = useStyles();
  
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
 
  const list = (anchor) => (
    <div
      className={clsx(classes.list)}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >,
      <List>
        {[{
          name: 'Home',
          utility: props['redirectHome']
        },
        {
          name: 'Signup',
          utility: props['redirectToSignUp']
        },
        {
          name: 'Logout',
          utility: props['handleLogOut']
        },
        ].map((text, index) => (
    
          <ListItem onClick={text.utility} button key={text.name} style={{marginTop: '25px'}}>
            <ListItemIcon>
            {(() => { 
                if (index === 0 ) { 
                  return <HomeIcon style={{color: 'rgba(188,216,193)'}} />
              } else if ( index === 1) { 
                  return <PersonIcon style={{color: 'rgba(227,217,133)'}}  />
              } else if (index === 2) { 
                  return <ExitToAppIcon style={{color: 'rgba(66,32,64)'}}  />
              } 

              }) ()}
            
            </ListItemIcon>
            <ListItemText primary={text.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Tooltip title="Menu">
             <Button onClick={toggleDrawer(anchor, true)} style={{color: 'rgba(229,122,68)'}}><MenuIcon/></Button>
          </Tooltip>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}