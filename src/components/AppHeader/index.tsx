import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import { useAvatarHide } from '../../useHooks/useAvatarHide';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainTransParent: {
      position: 'fixed',
      top: 0,
      backgroundColor: 'rgba(0,0,0,0.65)',
      color: '#fff',
      boxShadow: 'none',
    },
    btnGroup: {
      display: 'flex',
      flexGrow: 1,
      justifyContent: 'flex-end',
    },
  })
);

export const AppHeader: React.FC = () => {
  const classes = useStyles();
  const { isHide } = useAvatarHide();
  console.log('rxHide:', isHide);

  return (
    <AppBar position="static" className={classes.mainTransParent}>
      <Toolbar>
        <Typography variant="h6">Marckon</Typography>
        <div className={classes.btnGroup}>
          <IconButton>
            <GitHubIcon style={{ color: '#fff' }} />
          </IconButton>
          <IconButton>
            <EmailIcon style={{ color: '#fff' }} />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};
