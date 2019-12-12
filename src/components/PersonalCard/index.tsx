import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { MarckonAvatar } from '../MarckonAvatar';
import { ParallaxBG } from '../ParallaxBG';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    personalCard: {
      width: '90vw',
      height: '50vh',
      margin: '-15vh 5vw 0 5vw',
      backgroundColor: '#fff',
      borderRadius: '5vw',
      position: 'relative',
      boxShadow:
        '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);',
    },
    avatar: {
      position: 'absolute',
      left: '50%',
      top: 0,
      transform: 'translate(-50%, -50%)',
    },
  })
);

export const PersonalCard = () => {
  const classes = useStyles();

  return (
    <div className={classes.personalCard}>
      <MarckonAvatar className={classes.avatar} />
      <ParallaxBG />
    </div>
  );
};
